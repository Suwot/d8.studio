# Requirements Document

## Introduction

This project involves a complete refactor of the D8 Studio website to implement a clean, modular structure with improved user experience and maintainability. The refactor will transform the current 1000+ line monolithic HTML file and bloated CSS into a modular section-based architecture with clean, minimal styling while maintaining the premium brand aesthetic.

## Requirements

### Requirement 1

**User Story:** As a website maintainer, I want modular HTML sections, so that I can easily edit individual parts of the website without affecting other sections.

#### Acceptance Criteria

1. WHEN the website is restructured THEN each major section SHALL be in a separate HTML file
2. WHEN sections are created THEN they SHALL include: header.html, hero.html, services.html, interior-showcase.html, location-benefits.html, reviews.html, contact.html, footer.html
3. WHEN sections are developed THEN they SHALL be easily combinable into a single production HTML file
4. WHEN editing a section THEN changes SHALL not affect other sections during development

### Requirement 2

**User Story:** As a website visitor, I want a clear visual hierarchy focused on studio rental, so that I can quickly understand the primary service and book the studio.

#### Acceptance Criteria

1. WHEN the hero section loads THEN it SHALL prominently display "Премиум Фотостудия на 13 Этаже с Панорамными Окнами"
2. WHEN services are displayed THEN studio rental SHALL be the largest and most prominent card
3. WHEN CTAs are shown THEN "Забронировать студию" SHALL be the primary action with YClients integration
4. WHEN pricing is displayed THEN studio rental SHALL show "от 2,700₽/час" prominently
5. WHEN the page loads THEN the visual hierarchy SHALL be: Studio Rental > Interior Showcase > Location/Benefits > Services > Reviews > Contact

### Requirement 3

**User Story:** As a potential client, I want to see comprehensive interior showcase, so that I can make an informed decision about booking the studio.

#### Acceptance Criteria

1. WHEN the interior showcase section loads THEN it SHALL display image galleries from the /images folder
2. WHEN images are organized THEN they SHALL be categorized by: general studio interior, interior details, equipment for rental, best picks
3. WHEN galleries are displayed THEN they SHALL use a masonry/grid layout for optimal viewing
4. WHEN viewing images THEN they SHALL be high-quality and showcase the 13th floor panoramic windows
5. WHEN the showcase ends THEN it SHALL include a "Забронировать студию" CTA

### Requirement 4

**User Story:** As a website visitor, I want clean, fast-loading styles, so that I have a smooth browsing experience without bloated code.

#### Acceptance Criteria

1. WHEN CSS is rewritten THEN it SHALL be reduced from 1600+ lines to approximately 400-500 lines
2. WHEN styles are organized THEN they SHALL follow the structure: base styles, component styles, section-specific styles, utilities
3. WHEN redundant styles are removed THEN duplicate button variants and unused styles SHALL be eliminated
4. WHEN the color palette is preserved THEN the existing browns/beiges and glass effects SHALL be maintained
5. WHEN typography is implemented THEN the current font hierarchy and weights SHALL be preserved

### Requirement 5

**User Story:** As a mobile user, I want a responsive design optimized for touch interaction, so that I can easily navigate and book the studio on my phone.

#### Acceptance Criteria

1. WHEN the website loads on mobile THEN sections SHALL stack properly with touch-friendly CTAs
2. WHEN the hero section displays on mobile THEN key information SHALL be immediately visible
3. WHEN service cards are shown on mobile THEN they SHALL stack vertically with clear hierarchy
4. WHEN the interior showcase loads on mobile THEN images SHALL be optimized for mobile viewing
5. WHEN CTAs are displayed on mobile THEN they SHALL be easily tappable with proper spacing

### Requirement 6

**User Story:** As a business owner, I want integrated booking functionality, so that clients can directly book studio time through the website.

#### Acceptance Criteria

1. WHEN booking CTAs are clicked THEN they SHALL open YClients widget as modal or separate page
2. WHEN YClients integration is implemented THEN it SHALL show real availability slots
3. WHEN secondary contact options are provided THEN Telegram and WhatsApp quick connect buttons SHALL be available
4. WHEN service inquiries are made THEN "Обсудить проект" buttons SHALL be available for photo/video services
5. WHEN contact information is displayed THEN location and transport accessibility SHALL be clearly shown

### Requirement 7

**User Story:** As a developer, I want a clean build process, so that I can easily maintain the modular development structure while producing optimized production files.

#### Acceptance Criteria

1. WHEN development is active THEN sections SHALL be editable individually in /sections/ directory
2. WHEN production build is needed THEN all sections SHALL combine into a single index.html file
3. WHEN CSS is built THEN it SHALL be a single, minified file for production
4. WHEN the build process runs THEN it SHALL maintain all functionality from the modular version
5. WHEN assets are processed THEN images SHALL be properly referenced in both development and production versions