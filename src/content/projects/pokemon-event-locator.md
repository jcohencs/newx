---
title: Pokémon Event Locator
icon: ti-spider
summary: Terminal tool that scrapes dynamic web content from EventLocator, extracting structured event data — names, dates, venues, and descriptions.
tags: [Python, Web Scraping, CLI]
featured: true
order: 1
---

## The problem

Finding official Pokémon TCG events (locals, cups, challenges) meant digging through a slow, JavaScript-heavy event locator page by hand — one city, one date range at a time. There was no way to quickly scan upcoming events across a region.

## What I built

A terminal-based scraper that drives the dynamic EventLocator site, waits for its JS-rendered content to load, and extracts structured data: event name, date, venue, address, and format. Results are normalized into clean records that can be filtered, sorted, or exported.

## How it works

- Automates the page load and interaction needed to trigger the site's dynamic content rendering
- Parses the resulting DOM to pull out event fields consistently, even when markup varies between event types
- Packages results into structured output (CSV/JSON-style records) instead of raw HTML

## Outcome

What used to be a manual, page-by-page search became a single command that returns every relevant event in a region, ready to scan or pipe into another tool.
