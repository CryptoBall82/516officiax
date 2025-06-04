
# App Blueprint: OfficiaX (blueprint2.md)

## 1. Overview

*   **App Name**: OfficiaX
*   **Brief Description**: A platform for sports officials designed to streamline scheduling, provide essential tools, and offer AI-powered rule interpretations. It aims for a modern look with a dark theme, red branding, and gold accents.

## 2. Core Features (as implemented)

### 2.1. Authentication
*   **Login Page (`/login`):** Allows users to log in. Implemented with client-side form handling (`src/components/auth/login-form.tsx`).
*   **Signup Page (`/signup`):** Allows new users to register. Implemented with client-side form handling (`src/components/auth/signup-form.tsx`).
*   **Forgot Password Page (`/forgot-password`):** Mock functionality for password reset.
*   **Auth Context (`src/contexts/auth-context.tsx`):** Manages client-side authentication state (mock login, no actual backend integration shown for auth calls beyond state management and localStorage/sessionStorage persistence).
*   **Auth Redirect Hook (`src/hooks/use-auth-redirect.ts`):** Handles redirecting users based on authentication status.

### 2.2. Schedule Integration
*   **Schedule Page (`/schedule`):** Main page for schedule features.
    *   Buttons to navigate to "Google Calendar" and "iCal" integrations.
*   **Google Calendar Page (`/schedule/googlecalendar`):** Currently a placeholder page, intended for Google Calendar integration.
*   **iCloud Calendar:** No specific integration code present yet, button on schedule page is a placeholder.

### 2.3. Toolbox
*   **Toolbox Main Page (`/toolbox`):** Hub for various officiating tools.
*   **Assignor Information (`/toolbox/assignor-information`):**
    *   **Assignor Handbook:** Embeds a Google Document (`src/app/toolbox/assignor-information/handbook/page.tsx`).
    *   **Roster:** Embeds a Google Sheet (`src/app/toolbox/assignor-information/roster-doc/page.tsx`).
*   **Weather (`/toolbox/weather`):**
    *   Fetches current weather data from OpenWeatherMap API based on user's geolocation.
    *   Displays current city, temperature, feels like, humidity, wind speed, and description.
    *   Embeds a Meteoblue weather map iframe.
*   **Coin Flip (`/toolbox/cointoss`):** Embeds an interactive Scratch project for a coin toss.
*   **Umpire Classroom (`/toolbox/umpireclassroom`):** Embeds an Elfsight YouTube Gallery widget.

### 2.4. Field Status Information
*   Integrated within individual league pages (e.g., AYBA, Ocee Park).
*   Fetches and displays field status data from an external JSON file (`https://raw.githubusercontent.com/CryptoBall82/umpire-scraper/main/field_statuses.json`).
*   Located in `src/app/leagues/[leagueName]/fieldstatus/page.tsx`.

### 2.5. AI Assistants
*   **OfficiaX AI Assistant (`/ai-assistant`):** Embeds an external chatbot from `udify.app/chatbot/yMu38WVkDhy3hynm`.
*   **Genkit Flows:**
    *   **Rulebook Question Answering (`src/ai/flows/rulebook-question-answering.ts`):** AI flow to answer general questions based on rulebooks.
    *   **Rule Interpretation Assistant (`src/ai/flows/rule-interpretation-assistant.ts`):** AI flow to provide interpretations for specific rules from a designated rulebook.
*   **UI for Genkit Flows:**
    *   Components (`src/components/ai/rule-interpretation.tsx`, `src/components/ai/rulebook-qa.tsx`) exist to interact with these flows but are not yet integrated into a visible page.

## 3. Tech Stack

*   **Framework**: Next.js (v15.3.2) with App Router
*   **Language**: TypeScript
*   **UI Library**: React (v18.3.1)
*   **Component Library**: ShadCN UI (customizable components built with Radix UI and Tailwind CSS)
*   **Styling**: Tailwind CSS (v3.4.1)
*   **AI Integration**: Genkit (v1.8.0) with `@genkit-ai/googleai` for Google AI models (Gemini 2.0 Flash).
*   **State Management**: React Context API (e.g., `AuthContext`).
*   **Forms**: React Hook Form (v7.54.2) with Zod (v3.24.2) for validation.
*   **Icons**: Lucide Icons (primary for ShadCN), Material UI Icons (used in navbars and some pages).
*   **Mobile Compilation (Setup In Progress)**: Capacitor (v6.0.0) for potential native app builds (Android platform added).
*   **Linting/Formatting**: ESLint, Prettier (implied by standard Next.js setup).

## 4. Project Structure

### 4.1. Key Directories
*   **`src/app/`**: Core application routing and pages (App Router).
    *   `page.tsx`: Main public landing page.
    *   `home/page.tsx`: Authenticated user dashboard.
    *   `login/`, `signup/`, `forgot-password/`: Authentication pages.
    *   `leagues/`: Contains sub-directories for each league (AYBA, NFHS, Ocee Park, Perfect Game, Training Legends), each with potential sub-pages for rules, field status, etc.
    *   `schedule/`: Schedule-related pages.
    *   `toolbox/`: Toolbox feature pages.
    *   `ai-assistant/`: Page for the embedded AI chatbot.
    *   `globals.css`: Global styles and Tailwind CSS/ShadCN theme configuration.
    *   `layout.tsx`: Root application layout.
*   **`src/components/`**: Reusable React components.
    *   `auth/`: Authentication-related form components.
    *   `ai/`: Components for interacting with Genkit AI flows.
    *   `layout/`: Global layout components like headers, logo.
    *   `ui/`: ShadCN UI primitive components.
    *   Various specific header (`AuthHeader.tsx`, `DefaultHeader.tsx`, `HomeHeader.tsx`) and navbar (`NavbarAI.tsx`, `NavbarHome.tsx`, `NavbarLeagues.tsx`, `NavbarSchedule.tsx`, `NavbarTools.tsx`) components.
*   **`src/ai/`**: Genkit AI integration.
    *   `flows/`: Definitions for AI agents/flows.
    *   `genkit.ts`: Genkit client initialization and configuration.
    *   `dev.ts`: Entry point for running Genkit flows in development.
*   **`src/contexts/`**: React Context API providers (e.g., `auth-context.tsx`).
*   **`src/hooks/`**: Custom React Hooks (e.g., `useAuth.ts`, `useAuthRedirect.ts`, `use-mobile.ts`, `use-toast.ts`).
*   **`src/lib/`**: Utility functions (e.g., `utils.ts` for `cn` class name utility).
*   **`public/assets/`**: Static assets like images (logos, icons).
*   **`android/`**: Native Android project generated and managed by Capacitor.

### 4.2. Configuration Files
*   `package.json`: Project dependencies and scripts.
*   `tsconfig.json`: TypeScript configuration.
*   `next.config.ts`: Next.js configuration, including `output: 'export'` for static builds compatible with Capacitor.
*   `tailwind.config.ts`: Tailwind CSS configuration.
*   `components.json`: ShadCN UI configuration.
*   `capacitor.config.ts`: Capacitor configuration for the mobile app.
*   `.env`: Environment variables (currently empty).

## 5. UI & Styling

*   **Component Library**: Primarily ShadCN UI components, which are highly customizable.
*   **Styling Approach**: Tailwind CSS for utility-first styling. ShadCN theme variables are defined in `src/app/globals.css`.
*   **Color Palette & Theme**:
    *   **Background**: Dark (`hsl(0 0% 0%)` - Black).
    *   **Foreground**: Light (`hsl(0 0% 98%)` - Almost white).
    *   **Primary Brand Color**: 'OfficiaX Red' (`hsl(0 100% 40%)` - `#CC0000`), used for major UI elements like navbar backgrounds and borders.
    *   **Accent Color**: Gold (`hsl(51 100% 50%)` - `#FFD700`), used for interactive elements like buttons.
    *   The theme is applied globally via CSS custom properties in `globals.css`.
*   **Icons**:
    *   Lucide Icons (`lucide-react`) are the default for ShadCN components and used in areas like the landing page.
    *   Material UI Icons (`@mui/icons-material`) are used in the bottom navigation bars and some specific page buttons.
*   **Layout**: Fixed headers and footers (navigation bars) are a consistent design element. Content areas typically have padding to account for these fixed elements.

## 6. Navigation

*   **Routing**: Next.js App Router.
*   **Main Pages/Sections**:
    *   Public Landing Page (`/`)
    *   Login (`/login`), Signup (`/signup`), Forgot Password (`/forgot-password`)
    *   Authenticated Home/Dashboard (`/home`)
    *   Leagues (`/leagues` and sub-pages like `/leagues/ayba`, `/leagues/nfhs`, etc.)
    *   Schedule (`/schedule`)
    *   Toolbox (`/toolbox` and sub-pages like `/toolbox/weather`, `/toolbox/cointoss`, etc.)
    *   AI Assistant (`/ai-assistant`)
*   **Headers**:
    *   `AuthHeader.tsx`: Used on login, signup, forgot password pages.
    *   `DefaultHeader.tsx`: Used on most internal authenticated pages.
    *   `HomeHeader.tsx`: Specific header for the `/home` page.
    *   `AppHeader.tsx` (from `src/components/layout`): Appears to be an alternative header, possibly for a different layout structure or future use, includes main navigation links.
*   **Navigation Bars (Bottom)**:
    *   `NavbarHome.tsx`, `NavbarLeagues.tsx`, `NavbarSchedule.tsx`, `NavbarTools.tsx`, `NavbarAI.tsx`. Each provides quick navigation between the main sections of the authenticated app, highlighting the active section.

## 7. AI Functionality (Genkit)

*   **Initialization**: Genkit is initialized in `src/ai/genkit.ts` using the Google AI plugin and configured to use the `gemini-2.0-flash` model.
*   **Flows**:
    *   `rulebook-question-answering.ts`: Defines a flow to answer general rulebook questions.
    *   `rule-interpretation-assistant.ts`: Defines a flow to provide interpretations for specific rules from a given rulebook.
    *   Both flows use Zod for input/output schema definition and a Handlebars template for prompting.
*   **Development Entrypoint**: `src/ai/dev.ts` imports the flows, likely for use with the Genkit developer UI.
*   **UI Integration**:
    *   `src/app/ai-assistant/page.tsx` embeds an external chatbot via an iframe.
    *   `src/components/ai/rule-interpretation.tsx` and `src/components/ai/rulebook-qa.tsx` are UI components designed to interact with the respective Genkit flows. These are not currently rendered on any specific page in the provided file structure.

## 8. External Services & Data

*   **OpenWeatherMap API**: Used on the `/toolbox/weather` page to fetch current weather data.
*   **Meteoblue**: Weather map embedded via iframe on the `/toolbox/weather` page.
*   **Scratch (MIT)**: Coin toss game embedded via iframe on `/toolbox/cointoss`.
*   **Elfsight**: YouTube Gallery widget embedded on `/toolbox/umpireclassroom`.
*   **Udify.app**: Chatbot embedded via iframe on `/ai-assistant`.
*   **Google Docs/Sheets**:
    *   Assignor Handbook (`/toolbox/assignor-information/handbook`) embeds a Google Doc.
    *   Roster (`/toolbox/assignor-information/roster-doc`) embeds a Google Sheet.
    *   Various league rules pages (AYBA, NFHS Middle/High School, Ocee Park, Perfect Game, Training Legends All-Star/Travel) embed Google Docs or Sheets.
*   **GitHub Raw JSON**: Field status data for AYBA and Ocee Park is fetched from `https://raw.githubusercontent.com/CryptoBall82/umpire-scraper/main/field_statuses.json`.

## 9. Mobile (Capacitor Setup)

*   **Dependencies**: `@capacitor/android`, `@capacitor/cli`, `@capacitor/core` are included in `package.json`.
*   **Configuration**:
    *   `capacitor.config.ts`: Configures app ID (`com.OfficiaX.app`), app name (`OfficiaX`), and web directory (`out`).
    *   `next.config.ts`: Set up for `output: 'export'` and `images: { unoptimized: true }` to support static export for Capacitor.
*   **Android Project**: An `android/` directory exists, indicating the Android platform has been added via Capacitor. `MainActivity.java` and `AndroidManifest.xml` are present.
*   **Build Process**: The intention is to build an APK using Android Studio after syncing the web build.

## 10. Potential Areas for Future Development/Refinement

*   **Backend for Authentication**: Implement a secure backend for user authentication instead of the current mock/client-side state.
*   **Database Integration**: For storing user data, schedules, league information, etc.
*   **Direct Calendar API Integration**: Instead of iframes for Google Calendar, implement direct API calls for a more integrated experience.
*   **AI Component Integration**: Integrate the `RuleInterpretation` and `RulebookQA` AI components into user-facing pages.
*   **Error Handling & Loading States**: Enhance globally for API calls and data fetching.
*   **PWA Features**: Further enhance PWA capabilities for offline access and native-like feel on mobile web.
*   **Design Consistency**: Consolidate icon usage (Lucide vs. Material UI) and potentially refine the fixed header/navbar heights for more content space.
*   **Testing**: Implement unit, integration, and end-to-end tests.
*   **Accessibility**: Continue to ensure ARIA attributes and semantic HTML are used throughout.
*   **Performance Optimization**: Further optimize image loading, code splitting, and data fetching strategies.
*   **Capacitor Plugin Integration**: Explore Capacitor plugins for accessing native device features if needed (e.g., push notifications, camera).
