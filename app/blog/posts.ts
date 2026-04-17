export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readingMinutes: number;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "clean-phone-gallery-without-losing-important-photos",
    title: "How to Clean Your Phone Gallery Without Losing Important Photos",
    description:
      "A simple, stress-free method to declutter your gallery without ever worrying about deleting the wrong memory.",
    date: "2026-03-18",
    readingMinutes: 5,
    content: `Most people put off cleaning their gallery for one reason: fear. Fear of swiping away a memory you'll want back. Fear of tapping the wrong button at the wrong moment.

The trick is not to clean faster. It's to clean **safely**.

## Start with what you already know is clutter

Screenshots. Duplicates. Random memes. Pictures of parking spots. These rarely carry sentimental value — and they make up more of your library than you think.

- Screenshots you took for a single message
- Duplicate shots you burst-captured
- Receipts, QR codes, and ticket screenshots you no longer need
- Blurry attempts at the same photo

## Use a review step before you commit

A good rule: *never delete instantly.* Every cleanup session should end with a review — a final pass where you can bring anything back before it's actually removed.

This small safety net is the reason people stick with cleaning apps at all. It removes the anxiety.

## Think in small sessions, not big purges

Trying to clean *everything at once* is how people burn out. Instead:

- Clean five minutes a day
- Focus on one month at a time
- Stop when you feel done — not when the gallery is empty

---

Cleaning your gallery shouldn't feel like a risk. With the right flow — quick decisions, grouped months, and a safe review — it becomes something you actually look forward to.`,
  },
  {
    slug: "why-your-storage-is-always-full",
    title: "Why Your Storage Is Always Full (And How to Fix It)",
    description:
      "The real reason your phone runs out of space — and the fastest way to reclaim gigabytes without giving anything up.",
    date: "2026-03-27",
    readingMinutes: 4,
    content: `Your phone isn't broken. Your gallery is.

Photos and videos are the single largest category of storage on almost every modern phone. One minute of 4K video is about 400 MB. A single Live Photo is nearly five megabytes. Multiply by *years* of everyday capture, and it adds up fast.

## The usual suspects

- **Duplicates** from bursts and shared albums
- **Screenshots** that live forever
- **Videos** — a handful can outweigh thousands of photos
- **Live Photos** — small moving bonuses that quietly stack up
- **Downloads** cached by social apps

## Why "Offload Unused Apps" doesn't really help

Clearing app caches buys you a few hundred megabytes. Deleting *one* 2-minute 4K video frees about the same. The fastest path to real breathing room is always the gallery.

## A faster way to reclaim space

Instead of scrolling endlessly, swipe:

- **Swipe right** to keep
- **Swipe left** to remove
- Review before confirming

That's it. No lists. No folders. Just a calm loop of fast, confident decisions — exactly the kind your brain is built for.

---

Storage anxiety isn't about the phone. It's about *friction*. Remove the friction and the problem disappears.`,
  },
  {
    slug: "fastest-way-to-organize-thousands-of-photos",
    title: "The Fastest Way to Organize Thousands of Photos",
    description:
      "Stop scrolling. Start sorting. A calm workflow for taming a gallery that grew out of control.",
    date: "2026-04-05",
    readingMinutes: 6,
    content: `Ten thousand photos sound intimidating. They shouldn't be. With the right structure, even the messiest gallery can feel manageable within a week.

## Step 1 — Group by month, not by folder

Folders are a trap. They require you to decide where something *belongs*, and that decision is exhausting when you're browsing quickly.

Months are different. Every photo already has a date. Let the calendar do the work.

## Step 2 — One month per session

Open a single month. Swipe through it. Done.

Small batches remove the overwhelm. You always know how far you have to go, and you always know when you're finished. That sense of completion matters.

## Step 3 — Decide in under a second

If a photo doesn't make you feel anything in one second, it probably shouldn't stay. This sounds harsh, but it's really a kindness to your future self — fewer photos means the ones you keep get to *matter more*.

## Step 4 — Keep a safety net

Always review what's marked for deletion before it goes. You'll be surprised how often a single glance saves something worth keeping.

## What a clean gallery feels like

- Scrolling stops being a chore
- "Memories" actually surfaces memories
- Storage stops being a thing you think about

---

The goal is not a perfect library. It's a gallery that feels *light* again — and that can happen in days, not weeks.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
