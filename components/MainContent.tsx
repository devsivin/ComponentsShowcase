import { ComponentChildren } from "preact";

interface MainContentProps {
  children?: ComponentChildren;
}

export default function MainContent(props: MainContentProps) {
  return (
    <main class="flex-1 flex flex-col">
      <header class="h-16 border-b">
      </header>

      <div class="flex justify-center">
        <div class="flex max-w-7xl">
          <div class="grid grid-cols-3 gap-4 p-8">
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
}
