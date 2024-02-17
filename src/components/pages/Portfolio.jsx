import PortfolioBox from "../PortfolioBox"
import joker from '../../assets/joker.png';
import enviro from '../../assets/enviro.png';
import search from '../../assets/search.png';
import thriller from '../../assets/thriller.png';

export default function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <PortfolioBox imgsrc={enviro} imgalt="environment" header="dramatizing the environment" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas." />
        <PortfolioBox imgsrc={joker} imgalt="joker trailer" header="alternative joker trailer" desc="Volutpat blandit aliquam etiam erat velit scelerisque in. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Augue lacus viverra vitae congue eu consequat ac felis donec."/>
        <PortfolioBox imgsrc={search} imgalt="the search" header="the search" desc="Auctor elit sed vulputate mi sit amet. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ipsum dolor sit amet consectetur adipiscing elit." />
        <PortfolioBox imgsrc={thriller} imgalt="thriller" header="the thriller" desc="Diam quam nulla porttitor massa id neque. Vitae suscipit tellus mauris a diam maecenas sed enim ut." />
      </div>
    </>
  )
}