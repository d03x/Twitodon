import Icon from "@/components/Icon";
import { AppWrapper } from "@page/Home/Home.styles";
const Home = () => {
  return (
    <AppWrapper>
      <Icon size={26} name="notification" />
      <Icon size={26} name="home" />
      <Icon size={26} name="heart-empty" color={"white"} />
      <Icon size={26} name="retweet" color={"white"} />
      <Icon size={26} name="reply" color={"white"} />
      <Icon size={26} name="settings" color={"white"} />
      <Icon size={26} name="search" color={"white"} />
      <Icon size={26} name="at" color={"white"} />
      <Icon size={24} name="verified" color={"white"} />
      <Icon size={24} name="trash" color={"white"} />
      <Icon size={24} name="more-horiz" color={"white"} />
      <Icon size={24} name="more-vertical" color={"white"} />
      <Icon size={24} name="share" color={"white"} />
      <Icon size={24} name="check-outline" color={"white"} />
      <Icon size={24} name="bookmark" color={"white"} />
      <p style={{ 
        fontSize:"24px"
       }}>
        Home
      </p>
    </AppWrapper>
  );
};

export default Home;
