# Enquiry email + Clarity

## What works now (no Web3Forms key yet)

| Channel | Behaviour |
| --- | --- |
| WhatsApp | Always opens prefilled handoff with name, phone, pickup, destination, date, passengers, message, lang, page URL, timestamp |
| Email | **mailto** To `sriviarumugatravels@gmail.com` + Cc `arumugatamilselvan@gmail.com` (both Gmails addressed) when no form key is set or POST fails |
| Call | Both numbers unchanged |

Payload fields on submit: `name`, `phone`, `pickup`, `destination`, `date`, `passengers`, `message`/`notes`, `lang`, `page_url`, `timestamp`.

## What you must still do (Web3Forms)

No access key exists in `.env*` (by design — do not invent secrets).

1. Open https://web3forms.com → Create Access Key.
2. Use email **`arumugatamilselvan@gmail.com`** → set Vercel env `VITE_WEB3FORMS_ACCESS_KEY`.
3. Create a **second** free key with **`sriviarumugatravels@gmail.com`** → set `VITE_WEB3FORMS_ACCESS_KEY_PUBLIC` (free plan = one inbox per key).
4. Redeploy. Form submit will POST to Web3Forms for each key **and** still open WhatsApp.

Alternative: one key + Gmail auto-forward from owner → public inbox.

## Clarity (`yrhkngc4c4`)

- Early official snippet in `index.html` (`id="ms-clarity"` → `https://www.clarity.ms/tag/yrhkngc4c4`).
- `Analytics.tsx` injects the same bootstrap only if that script / started Clarity is absent (no double-init).
- Live site should load the tag; if dashboard still shows “Almost there / install”: disable ad blockers, open the live URL once, wait for Clarity to verify the first hit (can take a short time on new projects).
- Enquiry submit fires Clarity `enquiry_submit` + tags `enquiry_lang`, `enquiry_has_endpoint`, `enquiry_channel` — **no phone/email/name** in Clarity payloads.
- GA4 only if `VITE_GA4_MEASUREMENT_ID` is set.
