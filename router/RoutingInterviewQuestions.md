# React Router – Advanced & Real-World Interview Questions (Accordion)

<details>
  <summary><strong>1. What problem does React Router solve in an SPA?</strong></summary>

- Enables client-side navigation without full page reloads.
- Keeps UI state in sync with the URL.
- Supports deep linking and browser navigation.

</details>

<details>
  <summary><strong>2. Difference between anchor tag navigation and React Router navigation?</strong></summary>

- Anchor tags cause a full page reload.
- React Router performs client-side navigation using the History API.

</details>

<details>
  <summary><strong>3. Difference between BrowserRouter and HashRouter?</strong></summary>

- BrowserRouter uses clean URLs but requires server rewrite.
- HashRouter uses hash-based URLs and works without server config.

</details>

<details>
  <summary><strong>4. Why do routes work on click but fail on page refresh?</strong></summary>

- Server does not know client-side routes.
- Refresh directly hits the server and returns 404.
- Requires redirecting all routes to index.html.

</details>

<details>
  <summary><strong>5. What is client-side routing?</strong></summary>

- Routing handled in the browser.
- Page does not reload on navigation.
- Only UI updates based on URL.

</details>

<details>
  <summary><strong>6. What are nested routes?</strong></summary>

- Routes defined inside other routes.
- Used to share layout and structure.
- Common in dashboards and admin panels.

</details>

<details>
  <summary><strong>7. What is a layout route?</strong></summary>

- A route that renders shared UI.
- Used for headers, sidebars, guards.
- Child routes render inside it.

</details>

<details>
  <summary><strong>8. What is Outlet and why is it needed?</strong></summary>

- Renders matched child routes.
- Enables nested routing.
- Required for layout reuse.

</details>

<details>
  <summary><strong>9. Difference between navigate and Navigate?</strong></summary>

- navigate is used for event-based navigation.
- Navigate is used for conditional redirects during render.

</details>

<details>
  <summary><strong>10. What does replace navigation do?</strong></summary>

- Replaces current history entry.
- Prevents going back to restricted pages.
- Used in guards and login redirects.

</details>

<details>
  <summary><strong>11. What is Route State?</strong></summary>

- Temporary in-memory data passed during navigation.
- Not visible in URL.
- Lost on page refresh.

</details>

<details>
  <summary><strong>12. When should Route State be used?</strong></summary>

- Temporary data sharing.
- Form submit to result page.
- Non-secure, non-shareable data.

</details>

<details>
  <summary><strong>13. URL params vs Query params?</strong></summary>

- URL params identify the resource.
- Query params control page behavior.
- Query params are optional.

</details>

<details>
  <summary><strong>14. Are route params or route state secure?</strong></summary>

- No frontend routing data is secure.
- Only backend authorization is secure.

</details>

<details>
  <summary><strong>15. What is authentication?</strong></summary>

- Verifies user identity.
- Usually handled by login and tokens.

</details>

<details>
  <summary><strong>16. What is authorization?</strong></summary>

- Determines what a user can access.
- Based on roles or permissions.

</details>

<details>
  <summary><strong>17. Authentication vs Authorization?</strong></summary>

- Authentication checks who you are.
- Authorization checks what you can access.

</details>

<details>
  <summary><strong>18. What is a protected route?</strong></summary>

- A route accessible only after auth check.
- Blocks unauthenticated access.

</details>

<details>
  <summary><strong>19. How do you build protected routes in React Router v6?</strong></summary>

- Use a guard at route or layout level.
- Redirect if not allowed.
- Render child routes if allowed.

</details>

<details>
  <summary><strong>20. Where should authorization checks live?</strong></summary>

- Route or layout level.
- Not inside page components.

</details>

<details>
  <summary><strong>21. Why are page-level guards discouraged?</strong></summary>

- Page already starts mounting.
- Effects and API calls may run.
- Causes flicker and leaks.

</details>

<details>
  <summary><strong>22. What is a redirect loop?</strong></summary>

- User keeps getting redirected repeatedly.
- Usually due to incorrect guard logic.

</details>

<details>
  <summary><strong>23. How do you prevent redirect loops?</strong></summary>

- Use replace navigation.
- Do not guard login routes.
- Handle loading states.

</details>

<details>
  <summary><strong>24. What is a 401 error?</strong></summary>

- User is not authenticated.
- Login required.

</details>

<details>
  <summary><strong>25. What is a 403 error?</strong></summary>

- User is authenticated.
- But does not have permission.

</details>

<details>
  <summary><strong>26. What is a 404 error?</strong></summary>

- Route or resource not found.

</details>

<details>
  <summary><strong>27. Difference between 401, 403, and 404?</strong></summary>

- 401: not authenticated.
- 403: forbidden.
- 404: not found.

</details>

<details>
  <summary><strong>28. How should 403 be handled in UI?</strong></summary>

- Show forbidden page.
- Or redirect explicitly.
- Do not treat as 404.

</details>

<details>
  <summary><strong>29. How do you implement a global 404?</strong></summary>

- Use a catch-all route.
- Place it at the end.

</details>

<details>
  <summary><strong>30. Global 404 vs nested 404?</strong></summary>

- Global 404 handles invalid public routes.
- Nested 404 handles invalid routes inside layouts.

</details>

<details>
  <summary><strong>31. What is a public layout?</strong></summary>

- Layout for unauthenticated pages.
- Home, login, marketing pages.

</details>

<details>
  <summary><strong>32. What is a private layout?</strong></summary>

- Layout for authenticated users.
- Dashboard, profile, settings.

</details>

<details>
  <summary><strong>33. What is an admin layout?</strong></summary>

- Layout restricted to admin roles.
- Includes role-based guards.

</details>

<details>
  <summary><strong>34. UI hiding vs route security?</strong></summary>

- Hiding UI does not secure routes.
- Routes must always be protected.

</details>

<details>
  <summary><strong>35. What happens if user manually types a private URL?</strong></summary>

- Guard logic runs.
- User is redirected or shown forbidden.

</details>

<details>
  <summary><strong>36. How do you redirect users back after login?</strong></summary>

- Store original route.
- Navigate back after successful login.

</details>

<details>
  <summary><strong>37. What is route matching?</strong></summary>

- React Router matches URL to route definitions.
- Most specific route wins.

</details>

<details>
  <summary><strong>38. What is route ranking?</strong></summary>

- Routes are ranked by specificity.
- Prevents ambiguous matches.

</details>

<details>
  <summary><strong>39. What is deep linking?</strong></summary>

- Ability to open any route directly via URL.

</details>

<details>
  <summary><strong>40. Why is deep linking important?</strong></summary>

- Enables bookmarking and sharing.
- Improves UX and SEO.

</details>

<details>
  <summary><strong>41. What is basename in routing?</strong></summary>

- Prefix for all routes.
- Used when app is hosted under subpath.

</details>

<details>
  <summary><strong>42. How do you handle multiple user roles?</strong></summary>

- Use centralized permission checks.
- Guard routes based on roles.

</details>

<details>
  <summary><strong>43. What is partial access?</strong></summary>

- User can access page but not all actions.
- UI elements are disabled or hidden.

</details>

<details>
  <summary><strong>44. Where should partial access checks live?</strong></summary>

- Component level.
- Route remains accessible.

</details>

<details>
  <summary><strong>45. What is SPA hosting configuration?</strong></summary>

- Server must redirect all routes to index.html.

</details>

<details>
  <summary><strong>46. What is route-driven UI?</strong></summary>

- UI state controlled by URL.
- Tabs, filters, modals via routing.

</details>

<details>
  <summary><strong>47. What is navigation state?</strong></summary>

- Browser history stack.
- Controls back and forward behavior.

</details>

<details>
  <summary><strong>48. How do you prevent back navigation to login?</strong></summary>

- Use replace navigation after login.

</details>

<details>
  <summary><strong>49. What happens when auth state changes mid-session?</strong></summary>

- Guards re-evaluate.
- User may be redirected.

</details>

<details>
  <summary><strong>50. How do you handle token expiry?</strong></summary>

- Detect unauthorized responses.
- Logout or refresh token.
- Redirect to login.

</details>

<details>
  <summary><strong>51. What is frontend routing security?</strong></summary>

- UX control only.
- Not real security.

</details>

<details>
  <summary><strong>52. Where must real security be enforced?</strong></summary>

- Backend APIs.
- Server-side authorization.

</details>

<details>
  <summary><strong>53. When should Context or Redux be used with routing?</strong></summary>

- Global UI state.
- User info, theme, layout state.

</details>

<details>
  <summary><strong>54. Why is Context considered semi-secure?</strong></summary>

- Not in URL.
- But fully controlled by browser.

</details>

<details>
  <summary><strong>55. When should localStorage be used?</strong></summary>

- Non-sensitive persistence.
- Preferences, drafts, filters.

</details>

<details>
  <summary><strong>56. Why should tokens not be stored in localStorage?</strong></summary>

- Vulnerable to XSS.
- Security risk.

</details>

<details>
  <summary><strong>57. What is role-based routing?</strong></summary>

- Routes restricted based on roles.
- Admin, user, guest.

</details>

<details>
  <summary><strong>58. How do you scale routing in large apps?</strong></summary>

- Feature-based route structure.
- Shared layouts and guards.

</details>

<details>
  <summary><strong>59. What is route configuration?</strong></summary>

- Central definition of routes.
- Improves maintainability.

</details>

<details>
  <summary><strong>60. Why centralize route guards?</strong></summary>

- Avoid duplication.
- Prevent bugs.
- Easier to maintain.

</details>

<details>
  <summary><strong>61. What is route-based code splitting?</strong></summary>

- Loading routes lazily.
- Improves performance.

</details>

<details>
  <summary><strong>62. Why should login routes not be guarded?</strong></summary>

- Causes redirect loops.
- Breaks navigation flow.

</details>

<details>
  <summary><strong>63. What is an index route?</strong></summary>

- Default child route.
- Rendered when parent path matches.

</details>

<details>
  <summary><strong>64. What is route-driven breadcrumbs?</strong></summary>

- Breadcrumbs derived from route hierarchy.
- Improves navigation UX.

</details>

<details>
  <summary><strong>65. What is the most common routing mistake?</strong></summary>

- Missing server rewrite configuration.
- Treating frontend routing as security.

</details>
