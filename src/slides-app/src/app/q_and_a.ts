export const slideQAs = [
  [], //intro slide
  [
    {
      question:
        'Since the rollout-vendor-plugin was deprecated we implemented our manualChunk solution.' +
        'During the discussion, we talked about that Vite handles code splitting automatically. However, based on our experience, we encountered issues after introducing the manualChunks configuration. Therefore, our question is: should we retain the manualChunks configuration, or should we delegate all code splitting entirely to Vite?',
      answer:
        'It is recommended to use vite to handle code splitting. If you have a specific reason to keep the manual chunk configuration then keep in mind you are overriding its behavior and vite, so use it if you really need it. ' +
        'Example of use case when you need it: vite chunking produce a very BIG chunk, you are not using a cache, you are not using compression, you are not using a CDN, etc. ' +
        'Manual chunk configuration is recommended to honor your module system design. (e.g shell, registrations and modules) ' +
        'Most applications load needed and shared libraries on bootstrap in a single vendor chunk.',
      takeaway: 'Use vite to handle code splitting',
    },
  ],
  [
    {
      question:
        'We have an ESLint check in our PR pipeline. Is it a good practice to use it together with Husky?',
      answer:
        'Absolutely yes, but the pipeline ensures you have a centralized state (like caching) and should allows you to collect a report on how often PRs have been rejected due to ESLint errors for instance.',
      takeaway:
        "Use husky if you want to save time (costs) on PR pipelines, Don't write too many e2e tests, prefer to use unit tests",
    },
  ],
  [
    {
      question:
        "It's correct to diffentiate between presentation components and smart component whe using local state?",
      answer:
        'It is absolutely still correct and useful to differentiate between presentation (dumb) components and container (smart) components even when only using local state.The distinction is not about where the state comes from (local vs. global), but who owns the logic for that state.',
      takeaway:
        "Don't use local state for presentation components, break global state in smaller pieces, use smart components together with tanstack query to avoid data mishandling",
    },
  ],
  [],
]
