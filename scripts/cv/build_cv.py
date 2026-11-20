"""Renders scripts/cv/cv.html to public/cv/dhiraj-thapa-chhetri-cv.pdf.
Run: python3 scripts/cv/build_cv.py"""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[2]

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto((ROOT / "scripts/cv/cv.html").as_uri(), wait_until="networkidle")
        await page.evaluate("document.fonts.ready")
        out = ROOT / "public/cv/dhiraj-thapa-chhetri-cv.pdf"
        await page.pdf(path=str(out), format="A4", print_background=True, prefer_css_page_size=True)
        await browser.close()
        print("wrote", out)

asyncio.run(main())
