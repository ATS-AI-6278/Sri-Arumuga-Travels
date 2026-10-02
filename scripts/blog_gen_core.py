#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Core helpers + write all blog posts."""
from __future__ import annotations
import json
from pathlib import Path

OUT = Path("/workspace/sri-arumuga-travels/src/content/blog/posts")
OUT.mkdir(parents=True, exist_ok=True)

def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)

def blocks_to_ts(blocks: list) -> str:
    parts = []
    for b in blocks:
        t = b["type"]
        if t in ("p", "callout"):
            parts.append(f"  {{ type: '{t}', text: {ts_str(b['text'])} }},")
        elif t in ("h2", "h3"):
            parts.append(f"  {{ type: '{t}', id: {ts_str(b['id'])}, text: {ts_str(b['text'])} }},")
        elif t in ("ul", "ol"):
            items = ",\n".join(f"      {ts_str(i)}" for i in b["items"])
            parts.append(f"  {{ type: '{t}', items: [\n{items},\n    ] }},")
        elif t == "table":
            headers = ", ".join(ts_str(h) for h in b["headers"])
            rows = ",\n".join(
                "      [" + ", ".join(ts_str(c) for c in row) + "]" for row in b["rows"]
            )
            cap = f", caption: {ts_str(b['caption'])}" if b.get("caption") else ""
            parts.append(
                f"  {{ type: 'table'{cap}, headers: [{headers}], rows: [\n{rows},\n    ] }},"
            )
        elif t == "faq":
            items = ",\n".join(
                f"      {{ q: {ts_str(i['q'])}, a: {ts_str(i['a'])} }}" for i in b["items"]
            )
            parts.append(f"  {{ type: 'faq', items: [\n{items},\n    ] }},")
        elif t == "cta":
            if b.get("note"):
                parts.append(f"  {{ type: 'cta', note: {ts_str(b['note'])} }},")
            else:
                parts.append("  { type: 'cta' },")
        elif t == "links":
            items = ",\n".join(
                f"      {{ href: {ts_str(i['href'])}, label: {ts_str(i['label'])} }}"
                for i in b["items"]
            )
            title = f", title: {ts_str(b['title'])}" if b.get("title") else ""
            parts.append(f"  {{ type: 'links'{title}, items: [\n{items},\n    ] }},")
    return "\n".join(parts)

def write_post(post: dict) -> None:
    slug = post["slug"]
    body = blocks_to_ts(post["body"])
    cats = ", ".join(ts_str(c) for c in post["categoryIds"])
    tags = ", ".join(ts_str(t) for t in post["tagIds"])
    related = ", ".join(ts_str(s) for s in post.get("relatedSlugs", []))
    related_paths = post.get("relatedPaths") or []
    rp = ""
    if related_paths:
        rp = f"\n  relatedPaths: [{', '.join(ts_str(p) for p in related_paths)}],"
    featured = ",\n  featured: true" if post.get("featured") else ""
    content = (
        "import type { BlogPost } from '../types';\n\n"
        "const post: BlogPost = {\n"
        f"  slug: {ts_str(slug)},\n"
        f"  title: {ts_str(post['title'])},\n"
        f"  description: {ts_str(post['description'])},\n"
        f"  lang: {ts_str(post['lang'])},\n"
        f"  categoryIds: [{cats}],\n"
        f"  tagIds: [{tags}],\n"
        f"  publishedAt: {ts_str(post['publishedAt'])},\n"
        f"  updatedAt: {ts_str(post['updatedAt'])},\n"
        f"  heroImage: {ts_str(post['heroImage'])},\n"
        f"  heroAlt: {ts_str(post['heroAlt'])},\n"
        f"  relatedSlugs: [{related}],{" ," if featured or related_paths else ""}{featured}{rp}\n"
        "  body: [\n"
        f"{body}\n"
        "  ],\n"
        "};\n\n"
        "export default post;\n"
    )
    (OUT / f"{slug}.ts").write_text(content, encoding="utf-8")

def p(text): return {"type": "p", "text": text}
def h2(i, text): return {"type": "h2", "id": i, "text": text}
def h3(i, text): return {"type": "h3", "id": i, "text": text}
def ul(*items): return {"type": "ul", "items": list(items)}
def ol(*items): return {"type": "ol", "items": list(items)}
def callout(text): return {"type": "callout", "text": text}
def cta(note=None):
    b = {"type": "cta"}
    if note: b["note"] = note
    return b
def faq(*pairs): return {"type": "faq", "items": [{"q": q, "a": a} for q, a in pairs]}
def table(headers, rows, caption=None):
    b = {"type": "table", "headers": headers, "rows": rows}
    if caption: b["caption"] = caption
    return b
def links(title, *items):
    return {"type": "links", "title": title, "items": [{"href": h, "label": l} for h, l in items]}

HERO = "/hero-scene.webp"
HERO_ROAD = "/hero-highway.webp"
HERO_FLEET = "/fleet-scene.webp"

def post(**kwargs):
    kwargs.setdefault("publishedAt", "2026-10-02")
    kwargs.setdefault("updatedAt", kwargs["publishedAt"])
    kwargs.setdefault("heroImage", HERO)
    kwargs.setdefault("heroAlt", "Southern Tamil Nadu travel")
    kwargs.setdefault("relatedSlugs", [])
    kwargs.setdefault("relatedPaths", [])
    kwargs.setdefault("featured", False)
    return kwargs

print("core loaded")
