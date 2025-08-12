import MainContent from "../components/MainContent.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Card1 from "../components/Card1.tsx";

export default function Home() {
  return (
    <div class="flex h-screen">
      <Sidebar />
      <MainContent>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </MainContent>
    </div>
  );
}
