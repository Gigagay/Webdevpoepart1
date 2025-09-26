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

## Sitemap
```mermaid
graph TD
A[Homepage] --> B[About Us];
A --> C[Our Programs];
A --> D[Donate];
A --> E[Contact];

## Part 2: CSS Styling and Responsive Design Implementation

### Design Approach
This website implements **responsive design** rather than adaptive design, meaning it uses a flexible layout that fluidly adapts to any screen size. Unlike adaptive design which uses fixed layouts at specific breakpoints, our responsive approach ensures seamless scaling across all devices.

### CSS Units Strategy
- **Relative units** are prioritized over absolute units for flexibility
- **rem units** are used for typography (relative to root `<html>` font-size)
- **em units** are applied for components within parent containers
- **Percentage-based widths** and **viewport units** for layout flexibility

### Parent-Child Container Structure
The design utilizes a systematic parent-child relationship through div containers where child elements inherit styles from their parent containers.

### Recent Design Updates (September 2025)

#### Visual Improvements
- **Updated background** with modern gradient and texture elements
- **Removed logo from navigation bar** to create cleaner, more minimalist header
- **Implemented live image backgrounds** using high-quality, optimized photographs
- **Enhanced visual hierarchy** through improved contrast and spacing

#### Responsive Design Principles Applied
1. **Fluid Grids**: Percentage-based widths instead of fixed pixels
2. **Flexible Images**: max-width: 100% to prevent overflow
3. **Media Queries**: Conditional CSS for different viewports
4. **Mobile-First**: Base styles for mobile, enhanced for larger screens
5. **Relative Units**: em/rem for scalable typography and spacing

### Responsive Testing Evidence

The website has been thoroughly tested across multiple device sizes. The design adapts seamlessly to different screen dimensions while maintaining optimal user experience.

#### Technical Implementation
```css
:root {
    --base-font-size: 16px; /* Root for rem calculations */
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Responsive breakpoints */
@media (max-width: 768px) {
    .parent-container {
        font-size: 14px; /* Adjusted base for mobile */
    }
}
