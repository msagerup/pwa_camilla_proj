'use client';

import * as React from 'react';

// import { Icons } from '@/components/icons';n
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Daily liquid input',
    href: '/chart/liquid_input',
    description:
      'Dynamic chart tracking daily liquid input over time, with adjustable parameters.',
  },
  {
    title: 'Daily liquid output',
    href: '/chart/liquid_output',
    description:
      'Dynamic chart tracking daily liquid output over time, with adjustable parameters.',
  },
  {
    title: 'Daily protein',
    href: '/chart/protein',
    description:
      'Dynamic chart tracking protein input over time, with adjustable parameters.',
  },
  {
    title: 'Overview',
    href: '/overview',
    description: 'Charts dashboard for general overview',
  },
];

export function HeaderNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Getting started for tracking
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3  md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    {/* <RenderAllowedLiquid /> */}
                    {/* <Icons.logo className='h-6 w-6' />s */}

                    <p className='text-sm leading-tight text-muted-foreground'>
                      Start by filling out values for fluid input / output you
                      will see the charts update as you populate the data.
                    </p>
                    <p className='mt-2 text-sm leading-tight '>
                      Happy peeing! :D
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/entry/input/liquid' title='Liquid input page'>
                Enter you liquid intake per instance.
              </ListItem>
              <ListItem href='/entry/output/liquid' title='Liquid output page'>
                Enter your liquid output per instance.
              </ListItem>
              <ListItem href='/entry/input/protein' title='Protein input page'>
                Enter your food intake per instance.
              </ListItem>
              <ListItem href='/entry/input/weight' title='Weight'>
                Your daily weigh input
              </ListItem>
              <ListItem href='/entry/input/labs' title='Labs'>
                Labs reports
              </ListItem>
              <ListItem href='/entry/input/meds' title='Medications'>
                Medications entry
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Statistical charts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
