This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This is my stab at making a portfolio site to learn some of the new features of NextJS 13 like edge routing, using framer-motion for animations, and the latest tailwindCSS. Feel free to clone this and do as you like.  

## Some things that I struggled with

1. Depending on where you deploy this app, you might come across problems with the api route handlers due to their usage of NextApiRequest and NextApiResponse. If this gives you problems you will have to revert to using NextRequest and NextResponse. You will find my commented code within those classes that you may use as I suggest moving to NextApi* classes.
2. The animations in framer-motion sometimes don't go according to plan, this took a lot of tweaking the css or splitting the animations up if they are iterating over a medium or more set of items. I welcome critique here, I'd love to know how to fix this in any implementation.

I owe credit to Sonny Sangha for his amazing breakdowns on youtube so check him out.