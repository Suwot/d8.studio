# Implementation Plan

- [x] 1. Set up project structure and create clean CSS foundation

  - Create directory structure (/sections/, /build/) and single clean CSS file
  - Write base styles with reset, typography, containers, and component styles
  - Create simplified button system and card components
  - _Requirements: 1.1, 1.2, 4.1, 4.2_

- [x] 2. Build header and hero sections

  - Create header.html with sticky navigation, logo, and booking CTA
  - Build hero.html with headline "Студия с лучшими видами в Москве"
  - Add detailed subheadline about 13-й этаж с панорамными окнами и всеми удобствами
  - Include primary "Забронировать студию" CTA with key benefits (13-й этаж • Панорамные виды • Естественный свет)
  - Style both sections with glass blur effects and responsive design
  - _Requirements: 1.1, 2.1, 2.4, 6.1, 6.2_

- [x] 3. Create services section with 4-card horizontal layout

  - Build services.html with 4 cards in a row on desktop (stack on mobile)
  - Make studio rental card prominent with от 2,700₽/час and YClients CTA
  - Add photo shoots (от 10,000₽), video shoots (от 20,000₽), additional services cards
  - Implement responsive behavior and proper visual hierarchy
  - _Requirements: 2.2, 2.5, 5.3, 6.4_

- [x] 5. Build interior showcase section with image galleries

  - Create interior-showcase.html with masonry/grid layout
  - Implement image galleries from /images folders (interior, equipment, best pics)
  - Add lightbox functionality for image viewing
  - Include "Забронировать студию" CTA after gallery
  - Optimize images for mobile viewing and lazy loading
  - _Requirements: 3.1, 3.2, 3.3, 3.5, 5.4_

- [x] 6. Create location and benefits section

  - Build location-benefits.html with split layout design
  - Integrate interactive map showing D8 Studio location
  - Implement benefits grid with 8 key advantages (update "Менеджер на месте" instead of "Два менеджера")
  - Add transport accessibility information (МЦК ЗИЛ, метро Автозаводская)
  - Style with responsive layout for mobile stacking
  - _Requirements: 6.5, 5.2_

- [x] 7. Implement reviews section with social proof

  - Create reviews.html with review cards layout
  - Add links to 2GIS, Yandex Maps, and Avito review platforms
  - Display selected best reviews with platform badges
  - Implement 3-column grid with mobile responsive stacking
  - Style review cards with proper spacing and visual hierarchy
  - _Requirements: 6.5_

- [x] 8. Build contact section with booking integration

  - Create contact.html with primary booking focus
  - Implement YClients widget integration (modal or embedded)
  - Add secondary contact options (Telegram, WhatsApp quick connect)
  - Include "Обсудить проект" forms for service inquiries
  - Display contact information and location details
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 9. Create footer section and finalize individual sections

  - Build footer.html with minimal essential links
  - Test all individual sections for proper styling and functionality
  - Ensure all sections work independently with their CSS
  - Validate responsive behavior across all sections
  - _Requirements: 1.1, 1.4, 5.1_

- [x] 10. Add YClients booking integration and build process

  - Research and integrate YClients widget to show real availability slots
  - Implement modal or separate page opening for booking
  - Create build script to combine all sections into single index.html
  - Test booking flow end-to-end functionality and production build
  - _Requirements: 6.1, 6.2, 7.1, 7.2, 7.3_

- [x] 11. Final optimization and testing
  - Optimize for mobile with touch-friendly CTAs and responsive design
  - Optimize images with lazy loading and ensure fast loading times
  - Test cross-browser compatibility and accessibility compliance
  - Prepare final production files for deployment
  - _Requirements: 5.1, 5.2, 5.4, 5.5, 1.3, 4.5, 7.4_
