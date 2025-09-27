# Web Development PoE - Part 1

**Student Name:** KWIZERA LATIF RAJABU
**Student Number:** ST10466217
**Subject:** WEDE5020 - Web Development

## Project Overview
This repository contains the submission for Part 1 of the PoE. The project is a website redesign for **FoodForward SA**, a non-profit organisation focused on reducing hunger and food waste in South Africa.

## Website Goals and Objectives
- **Primary Goal:** Increase online donations and corporate partnerships.
- **Key Performance Indicators (KPIs):**
  - 20% increase in monthly online donations.
  - Generate leads for 10 new corporate partners per quarter.
  - Achieve 1,000+ monthly newsletter subscriptions.

## Key Features and Functionality
- Interactive Donation Impact Calculator
- Volunteer Sign-Up System
- Integrated Social Media Feed
- Responsive Design for all devices

## Timeline and Milestones
| Week | Task |
| :--- | :--- |
| 1 | Research, Planning & Proposal (Part 1) |
| 2-3 | Development & Content Population (Part 2) |
| 4-5 | Testing, Final Touches & Deployment (Part 3) |

## Part 1 Details
This initial submission includes:
- The completed Project Proposal (`/documentation/Project-Proposal_FoodForward-SA.pdf`)
- Sourced legal assets and content (`/assets/content/`)
- Wireframes and Sitemap (`/assets/design/`)
- Basic HTML structure for all 5+ pages (`/src/`)

Part 2 Overview

In Part 2, the focus was on enhancing the visual design of the website through CSS styling and implementing a fully responsive design. This involved creating a consistent and professional look across all pages while ensuring usability across multiple devices (desktop, tablet, mobile). The key objectives achieved in Part 2 include:

Creation of an external CSS stylesheet (style.css) linked to all HTML pages.

Implementation of desktop-focused styling using Flexbox and CSS Grid for layout structure.

Application of typographic styles (font-family, font-size, font-weight, line-height, letter-spacing).

Use of CSS pseudo-classes (:hover, :focus, :active) for interactive elements like buttons and links.

Establishment of color scheme, visual styles, and spacing for a professional look.

Implementation of responsive design for mobile and tablet devices using media queries and relative units (%, em, rem).

Testing and iteration across multiple devices and browsers to ensure cross-device usability.


Changelog

Part 1 Feedback Implementation

Date	Change Description

2025-08-27	Corrected HTML structure on contact.html to improve accessibility.
2025-08-28	Added missing alt attributes for images on all pages.
2025-08-29	Fixed broken navigation links across pages.
2025-08-30	Standardised file/folder naming conventions and reorganised images and CSS folder.


Part 2 Implementation

Date	Change Description

2025-09-26	Created external style.css and linked to all HTML pages.
2025-09-26	Applied base typography and color scheme for website consistency.
2025-09-26	Implemented desktop layout using Flexbox/Grid for all main content sections.
2025-09-26	Styled buttons, forms, links, and cards with hover/focus effects.
2025-09-26	Added responsive media queries for mobile (<768px), tablet (768–1024px), and desktop (>1024px).
2025-09-26	Tested website on Chrome, Firefox, and mobile devices for layout and functionality.
2025-09-26	Captured screenshot evidence for desktop, tablet, and mobile views (see /screenshots/).



Responsive Design Evidence

Device Type	Screenshot

Laptop
Tablet	
Mobile	


Notes on Responsiveness:

Layout automatically switches from multi-column grid on desktop to single-column on mobile.

Font sizes, buttons, and forms scale appropriately using relative units.

Navigation menu collapses and remains usable across all devices.


References

Mozilla Developer Network (MDN) Web Docs. CSS Reference. https://developer.mozilla.org/en-US/docs/Web/CSS

W3Schools CSS Tutorial. https://www.w3schools.com/css/

Flexbox Guide – CSS Tricks. https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Grid Guide – CSS Tricks. https://css-tricks.com/snippets/css/complete-guide-grid/


# Responsive Screenshots

## Phone View
![Phone View](image/phone.png)

## Tablet View
![Tablet View](image/tablet.png)

## Laptop/Desktop View
![Laptop/Desktop View](image/laptop.png)



## Sitemap
```mermaid
graph TD
A[Homepage] --> B[About Us];
A --> C[Our Programs];
A --> D[Donate];
A --> E[Contact];


