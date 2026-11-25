// Before & After project photos for the Gallery page.
// Each project is shown strictly as: Before, then its matching After.
// `thumb` (800px wide) is used in the grid; `full` (up to 1600px) in the preview.
import whiteNavyKitchenBeforeThumb from "../assets/projects/white-navy-kitchen-remodel-before-800.webp";
import whiteNavyKitchenBefore from "../assets/projects/white-navy-kitchen-remodel-before.webp";
import whiteNavyKitchenAfterThumb from "../assets/projects/white-navy-kitchen-remodel-after-800.webp";
import whiteNavyKitchenAfter from "../assets/projects/white-navy-kitchen-remodel-after.webp";
import coffeeBarBeforeThumb from "../assets/projects/built-in-coffee-bar-before-800.webp";
import coffeeBarBefore from "../assets/projects/built-in-coffee-bar-before.webp";
import coffeeBarAfterThumb from "../assets/projects/built-in-coffee-bar-after-800.webp";
import coffeeBarAfter from "../assets/projects/built-in-coffee-bar-after.webp";
import retroKitchenBeforeThumb from "../assets/projects/retro-kitchen-remodel-before-800.webp";
import retroKitchenBefore from "../assets/projects/retro-kitchen-remodel-before.webp";
import retroKitchenAfterThumb from "../assets/projects/retro-kitchen-remodel-after-800.webp";
import retroKitchenAfter from "../assets/projects/retro-kitchen-remodel-after.webp";
import basementBeforeThumb from "../assets/projects/basement-finishing-before-800.webp";
import basementBefore from "../assets/projects/basement-finishing-before.webp";
import basementAfterThumb from "../assets/projects/basement-finishing-after-800.webp";
import basementAfter from "../assets/projects/basement-finishing-after.webp";
import slateKitchenBeforeThumb from "../assets/projects/slate-blue-kitchen-remodel-before-800.webp";
import slateKitchenBefore from "../assets/projects/slate-blue-kitchen-remodel-before.webp";
import slateKitchenAfterThumb from "../assets/projects/slate-blue-kitchen-remodel-after-800.webp";
import slateKitchenAfter from "../assets/projects/slate-blue-kitchen-remodel-after.webp";
import bathroomBeforeThumb from "../assets/projects/bathroom-remodel-before-800.webp";
import bathroomBefore from "../assets/projects/bathroom-remodel-before.webp";
import bathroomAfterThumb from "../assets/projects/bathroom-remodel-after-800.webp";
import bathroomAfter from "../assets/projects/bathroom-remodel-after.webp";

export const projects = [
    {
        title: "Kitchen Remodel",
        before: {
            thumb: whiteNavyKitchenBeforeThumb, full: whiteNavyKitchenBefore, width: 800, height: 600,
            alt: "Kitchen before remodel with dated wood cabinets and black countertops, floors protected during construction",
        },
        after: {
            thumb: whiteNavyKitchenAfterThumb, full: whiteNavyKitchenAfter, width: 800, height: 600,
            alt: "Remodeled kitchen with white upper cabinets, navy lower cabinets, marble-look quartz island and pendant lights",
        },
    },
    {
        title: "Built-In Coffee Bar",
        before: {
            thumb: coffeeBarBeforeThumb, full: coffeeBarBefore, width: 800, height: 600,
            alt: "Empty wall beside the kitchen before a built-in coffee bar was added",
        },
        after: {
            thumb: coffeeBarAfterThumb, full: coffeeBarAfter, width: 800, height: 1067,
            alt: "Custom built-in coffee bar with frosted glass upper cabinets, navy base cabinet and quartz countertop",
        },
    },
    {
        title: "Retro Kitchen Remodel",
        before: {
            thumb: retroKitchenBeforeThumb, full: retroKitchenBefore, width: 800, height: 598,
            alt: "Kitchen before remodel with dark wood cabinets, laminate countertops and vinyl floor",
        },
        after: {
            thumb: retroKitchenAfterThumb, full: retroKitchenAfter, width: 800, height: 600,
            alt: "Retro-style kitchen remodel with teal and white cabinets, orange countertops and black-and-white checkered floor",
        },
    },
    {
        title: "Basement Finishing",
        before: {
            thumb: basementBeforeThumb, full: basementBefore, width: 800, height: 600,
            alt: "Unfinished basement with exposed framing, spray foam insulation and concrete floor",
        },
        after: {
            thumb: basementAfterThumb, full: basementAfter, width: 800, height: 600,
            alt: "Finished basement with painted walls, recessed lighting, wood-look flooring and a new closet",
        },
    },
    {
        title: "Kitchen Remodel",
        before: {
            thumb: slateKitchenBeforeThumb, full: slateKitchenBefore, width: 800, height: 1067,
            alt: "Kitchen before remodel with honey oak cabinets, dark countertops and tile-look vinyl floor",
        },
        after: {
            thumb: slateKitchenAfterThumb, full: slateKitchenAfter, width: 800, height: 600,
            alt: "Remodeled kitchen with slate blue shaker cabinets, white quartz countertops, subway tile backsplash and oak floors",
        },
    },
    {
        title: "Bathroom Remodel",
        before: {
            thumb: bathroomBeforeThumb, full: bathroomBefore, width: 800, height: 831,
            alt: "Bathroom before remodel with paisley wallpaper, speckled wall tile and yellow vinyl floor",
        },
        after: {
            thumb: bathroomAfterThumb, full: bathroomAfter, width: 800, height: 1067,
            alt: "Remodeled bathroom with sage green subway tile tub surround, white hexagon floor tile and double vanity",
        },
    },
];

// Flattened in strict Before -> After order for the gallery grid.
export const beforeAfterPhotos = projects.flatMap((p) => [
    { ...p.before, label: "Before", title: p.title },
    { ...p.after, label: "After", title: p.title },
]);
