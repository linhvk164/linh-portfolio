/** Homepage hiring FAQ — questions recruiting managers often ask. */

export const hiringFaq = {
  brow: "FAQ",
  heading: "Got questions?",
  image: "/images/about/Work trip picture.webp",
  imageAlt: "Linh on a work trip",
  items: [
    {
      question: "How do you approach complex products?",
      answer: [
        "I start by understanding the problem before thinking about the interface. I look at who is using the product, what they're trying to accomplish, where the complexity comes from, and what constraints we're working within.",
        "From there, I break complex workflows into smaller, understandable pieces, explore different approaches, and validate them as early as possible. I'm especially interested in making complex information feel clear without oversimplifying what users actually need to know.",
      ],
    },
    {
      question: "How do you use AI?",
      answer: [
        "I use AI as a tool to accelerate exploration, prototyping, and implementation, not to replace design judgment. Tools like Cursor and Windsurf let me turn ideas into functional prototypes quickly, test interactions, and explore possibilities that would otherwise take much longer to build.",
        "I still make the product and design decisions myself. For me, the value of AI isn't just producing things faster. It's shortening the distance between an idea and something real enough to evaluate.",
      ],
    },
    {
      question: "How do you work with engineers?",
      answer: [
        "I like working with engineers early rather than treating development as something that happens after design. Technical constraints can have a major impact on the experience, so I try to understand them while I'm still exploring solutions.",
        "During implementation, I stay involved through handoff, QA, and iteration. I also care about building reusable patterns and systems rather than designing every screen as a one-off.",
      ],
    },
    {
      question: "What do you do when you disagree with a PM or engineer?",
      answer: [
        "I try to move the conversation away from personal preference and toward the underlying problem. I'll ask what we're optimizing for, what constraint is driving the concern, and what evidence we have.",
        "If we're still uncertain, I'd rather prototype or test an idea than debate it indefinitely. I don't expect every decision to go my way. Good collaboration means finding the solution that best serves the product, even when it isn't the one I initially proposed.",
      ],
    },
    {
      question: "How do you know when a design is successful?",
      answer: [
        "A design is successful when it creates a meaningful improvement for both the user and the product.",
        "Depending on the project, that might mean users completing a task more easily, understanding information faster, adopting a feature, reducing errors, or improving a measurable business outcome. When quantitative data isn't available, I use research, usability testing, feedback, and observation to understand whether the design is actually solving the problem.",
      ],
    },
    {
      question: "What do you care about most in a product?",
      answer: [
        "I care about making complexity feel simple without hiding the complexity that actually matters.",
        "I'm especially drawn to products where users have to navigate a lot of information, decisions, or workflows. Good design isn't about removing every piece of complexity. It's about giving people the right information at the right moment so they can understand what's happening and make confident decisions.",
      ],
    },
  ],
} as const;
