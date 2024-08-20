import Logo from "./_components/Logo";
import Description from "./_components/Description";
import OpenLink from "../components/OpenLink";
import Lessoninfo from "./_components/Lessoninfo";
import Contador from "./_components/Contador";

const Default = () => {
  return (
    <>
      <header className="App-header">
        <Contador/>
        <Logo />
        <Description />
        <OpenLink
            title="Learn React"
            url="https://reactjs.org"
        />
        <OpenLink
            title="Mi proyecto github"
            url="https://github.com/RakMont/desarrollo-front-react"
        />
        <Lessoninfo
          title="Lesson1"
          content="Content1"
        />
      </header>
    </>
  );
}
export default Default;
