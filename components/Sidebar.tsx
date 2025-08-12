export default function Sidebar() {
  return (
    <aside class="flex flex-col md:w-64 bg-white">
      <header class="h-16 flex items-center justify-between p-4 border-b border-r">
        <h1 class="text-xl font-bold">Showcase App</h1>
      </header>

      <nav class="flex-1 p-4 border-r">
        <ul>
          <li>
            <a href="#">Component 1</a>
          </li>
          <li>
            <a href="#">Component 2</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
