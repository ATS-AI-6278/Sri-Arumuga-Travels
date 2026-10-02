#!/usr/bin/env python3
"""Generate blog post TS modules from structured article data."""
from __future__ import annotations
import json
import os
from pathlib import Path
from textwrap import dedent

OUT = Path("/workspace/sri-arumuga-travels/src/content/blog/posts")
OUT.mkdir(parents=True, exist_ok=True)

def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

def ts_str(s: str) -> str:
    # prefer single-quoted when possible
    if "'" not in s and "\n" not in s:
        return "'" + s.replace("\\", "\\\\") + "'"
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
    related_paths = post.get("relatedPaths", [])
    rp = ""
    if related_paths:
        rp = f"\n  relatedPaths: [{', '.join(ts_str(p) for p in related_paths)}],"
    featured = ",\n  featured: true" if post.get("featured") else ""
    content = f"""import type {{ BlogPost }} from '../types';

const post: BlogPost = {{
  slug: {ts_str(slug)},
  title: {ts_str(post['title'])},
  description: {ts_str(post['description'])},
  lang: {ts_str(post['lang'])},
  categoryIds: [{cats}],
  tagIds: [{tags}],
  publishedAt: {ts_str(post['publishedAt'])},
  updatedAt: {ts_str(post['updatedAt'])},
  heroImage: {ts_str(post['heroImage'])},
  heroAlt: {ts_str(post['heroAlt'])},
  relatedSlugs: [{related}],{featured}{rp}
  body: [
{body}
  ],
}};

export default post;
"""
    (OUT / f"{slug}.ts").write_text(content, encoding="utf-8")

# ---------------------------------------------------------------------------
# Helpers for common block patterns
# ---------------------------------------------------------------------------

def p(text): return {"type": "p", "text": text}
def h2(id_, text): return {"type": "h2", "id": id_, "text": text}
def h3(id_, text): return {"type": "h3", "id": id_, "text": text}
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

def base(slug, title, desc, lang, cats, tags, related, body, featured=False, relatedPaths=None, hero=HERO, alt="Scenic Tamil Nadu road travel", date="2026-10-02"):
    return {
        "slug": slug,
        "title": title,
        "description": desc,
        "lang": lang,
        "categoryIds": cats,
        "tagIds": tags,
        "publishedAt": date,
        "updatedAt": date,
        "heroImage": hero,
        "heroAlt": alt,
        "relatedSlugs": related,
        "featured": featured,
        "relatedPaths": relatedPaths or [],
        "body": body,
    }

posts = []

# ========== ENGLISH POSTS ==========

posts.append(base(
  "visiting-srivilliputtur-travel-guide",
  "Visiting Srivilliputtur: a practical travel guide",
  "Plan a visit to Srivilliputtur — Andal Temple context, day pacing, nearby Madurai links, and how to arrange local or outstation travel without invented fares.",
  "en",
  ["srivilliputtur-travel", "tamil-nadu-tourism"],
  ["srivilliputtur", "temple", "madurai", "checklist"],
  ["andal-temple-visit-tips", "srivilliputtur-day-trip-ideas", "madurai-from-srivilliputtur-travel-tips"],
  [
    p("Srivilliputtur is a temple town in southern Tamil Nadu, known especially for the Andal–Vatapatrasayi temple complex and its place in Srivaishnava tradition. Travelers often arrive for darshan, family ceremonies, or as a calm base before Madurai, Rameswaram, or longer Tamil Nadu roads."),
    p("This guide focuses on practical pacing and questions to ask — not invented ticket prices, hotel ratings, or exact road times. Confirm current temple timings, festival crowds, and road conditions on the day you travel."),
    h2("why-visit", "Why travelers come to Srivilliputtur"),
    ul(
      "Temple darshan and festival visits around the Andal–Vatapatrasayi complex",
      "Family functions and short stays with relatives in and around the town",
      "A quieter overnight stop when linking Madurai with southern coastal or hill destinations",
      "Starting point for sedan outstation trips across Tamil Nadu and beyond",
    ),
    h2("getting-there", "Getting there — modes without inventing schedules"),
    p("Srivilliputtur is connected by road to Madurai and other southern towns. Rail connectivity exists for many travelers, but train numbers and timings change — check official Indian Railways sources before you lock a plan. For door-to-door comfort with elders or luggage, many families prefer a pre-arranged taxi from Madurai airport/station or a nearby city."),
    callout("Sri Arumuga Travels is based in Srivilliputtur and can discuss local day trips or outstation sedan journeys by call or WhatsApp. Fares depend on route, timing, and wait time — we do not publish fixed prices on this site."),
    h2("day-pacing", "A sensible day pace in town"),
    ol(
      "Confirm temple visiting hours and any special entry queues for the day (festival days differ).",
      "Allow buffer time for footwear counters, security lines, and rest — especially with children or elders.",
      "Plan meals around local restaurants you trust; carry water and any required medicines.",
      "If combining with Madurai the same day, decide whether temple focus stays in Srivilliputtur or splits — rushing both often frustrates families.",
      "Keep evening travel plans flexible if rain or local traffic intervenes.",
    ),
    h2("nearby", "Nearby links travelers often combine"),
    table(
      ["Direction of interest", "Why people combine it", "Planning note"],
      [
        ["Madurai", "Airport, Meenakshi temple city, onward trains", "Confirm whether same-day or overnight split works for your group"],
        ["Rameswaram", "Pilgrimage road from southern TN", "Longer day — pace for elders and heat"],
        ["Courtallam / Tenkasi belt", "Seasonal waterfalls and cooler air", "Season and rainfall matter; confirm access"],
        ["Tirunelveli area", "Regional hub and onward coastal routes", "Useful as a logistics stop, not only sightseeing"],
      ],
      "Combinations travelers discuss — distances and hours vary by road and stops; verify before you go.",
    ),
    h2("what-to-pack", "What to pack for a temple-town visit"),
    ul(
      "Modest clothing suitable for temple premises",
      "Comfortable footwear that is easy to remove",
      "Sun protection, water, and basic medicines",
      "Copies of ID if your lodging or transport asks for it",
      "A simple written list of pickup points and phone numbers for your driver or host",
    ),
    h2("faq", "Frequently asked questions"),
    faq(
      ("Is Srivilliputtur only for pilgrims?", "No. Many visits are family or logistics stops. The temple is central to the town’s identity, but day plans can include rest, local meals, and onward travel."),
      ("Should I book a taxi in advance?", "For airport meets, early starts, or multi-stop days with elders, advance coordination helps. For simple local hops, ask locally — availability varies."),
      ("Do you publish fares here?", "No. Routes, night driving, waiting time, and tolls (when applicable) change the conversation. Enquire with your dates and passenger count."),
    ),
    cta("Share your dates, pickup point, and destination — we will confirm what is practical."),
    links("Related on this site",
      ("/locations/srivilliputtur", "Srivilliputtur travel desk"),
      ("/services/temple-pilgrimage", "Temple & pilgrimage trips"),
      ("/services/local-taxi", "Local & day taxi"),
      ("/blog/andal-temple-visit-tips", "Andal Temple visit tips"),
    ),
  ],
  featured=True,
  relatedPaths=["/locations/srivilliputtur", "/services/temple-pilgrimage"],
  alt="Temple town travel context in southern Tamil Nadu",
))

posts.append(base(
  "andal-temple-visit-tips",
  "Andal Temple visit tips for first-time travelers",
  "Practical tips for visiting the Andal–Vatapatrasayi temple complex in Srivilliputtur — timing, dress, family pacing, and travel logistics without invented entry fees.",
  "en",
  ["srivilliputtur-travel", "tamil-nadu-tourism"],
  ["srivilliputtur", "temple", "pilgrimage", "family"],
  ["visiting-srivilliputtur-travel-guide", "temple-pilgrimage-family-travel", "planning-multi-stop-temple-circuit"],
  [
    p("The Andal–Vatapatrasayi temple complex is the spiritual heart of Srivilliputtur. First-time visitors often want calm darshan without a stressful rush between transport, footwear counters, and family needs."),
    p("Temple administrations publish timings and festival notices through official or widely known local channels. Treat any timing you hear as something to re-confirm on the day — special days change queues and access patterns."),
    h2("before-you-go", "Before you go"),
    ul(
      "Check whether your visit falls on a festival, weekend, or ordinary weekday — crowds differ.",
      "Agree a meeting point if your group splits (parking, footwear area, or a landmark outside).",
      "Carry only what you need inside; keep valuables minimal.",
      "If elders need shorter walking segments, plan who stays with them and who joins longer queues.",
    ),
    h2("dress-and-etiquette", "Dress and etiquette"),
    p("Modest clothing is expected on temple premises. Remove footwear where indicated. Follow volunteer or security instructions for queues and photography rules — policies can differ by shrine area."),
    h2("with-family", "Visiting with children or elders"),
    ol(
      "Build in rest and water breaks; heat and standing time add up.",
      "Eat a light meal before long waits if someone in the group is sensitive to low blood sugar.",
      "Keep a simple exit plan if someone tires early — forcing a full circuit can spoil the day.",
      "For multi-temple days (for example Srivilliputtur plus Madurai), prefer quality over quantity."),
    ),
    h2("travel-logistics", "Travel logistics around darshan"),
    p("If you are arriving from Madurai airport or another city, pad your schedule for road variability. Same-day round trips are possible for some groups and exhausting for others — decide based on age mix and heat, not only distance."),
    callout("For temple-paced sedan trips from Srivilliputtur, enquire with Sri Arumuga Travels. Describe passenger ages, luggage, and whether you need waiting time at the temple."),
    h2("faq", "FAQ"),
    faq(
      ("Are there fixed entry tickets I should budget from this article?", "Do not rely on blog posts for fee amounts. Check on-site or official notices for the day you visit."),
      ("Can we leave bags in a taxi during darshan?", "Only if you trust your arrangement and your driver agrees. Never leave passports or irreplaceable items unattended without a clear plan."),
      ("Is photography allowed everywhere?", "Rules vary by area. Follow posted signs and staff guidance."),
    ),
    cta(),
    links("Keep reading",
      ("/blog/visiting-srivilliputtur-travel-guide", "Srivilliputtur travel guide"),
      ("/services/temple-pilgrimage", "Temple & pilgrimage service"),
      ("/locations/srivilliputtur", "Srivilliputtur location page"),
    ),
  ],
  relatedPaths=["/services/temple-pilgrimage", "/locations/srivilliputtur"],
  alt="Temple visit planning in Srivilliputtur",
  date="2026-10-01",
))

print(f"Prepared {len(posts)} posts so far (partial write test)")
# Write all later after full list
for p_ in posts:
    write_post(p_)
print("wrote initial", len(posts))
