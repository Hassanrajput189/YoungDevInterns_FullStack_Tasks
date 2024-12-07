import React from 'react';
import LargeImgCard from './LargeImgCard';
import SmallImgCard from './SmallImgCard';
import Card from './Card';
import NewsAndEvents from './NewsAndEvents';
import QuickInfo from './QuickInfo';

const Main: React.FC = () => {
  let desc1 = "Gender issues are central to the achievement of strategic plans and Assistance Objectives (AO), and MUET along with USAID strives to promote gender equality, in which both men and women have equal opportunity to benefit from and contribute to economic, social, cultural, and political development; enjoy socially valued resources and rewards; and realize their human rights."
  let desc2 = "It is an extreme honor and privilege for me to lead one of the prestigious University of the country as the Vice Chancellor. I have great affection and love for this wonderful institution since my student life here in the year 1989.  I started my career as a Site Engineer way back in 1995. However, my passion to serve my Alma mater led me to join this university as a faculty member in 1996 reaching the top echelons as Meritorious Professor in 2018."
  let desc3 = "This office is dedicated to elevate the socio-economic position of the needy & deserving undergraduate students by providing access to quality education through need-based and merit-based Scholarships / Financial Assistances and interest free educational Loans."
  let desc4 = "Online Feedback Portal has now been launched in order to facilitate students so that, they can give their feedback about Course, Teachers and Facilities hassle free"

  let desc5 = "MUET Newsletter is a quarterly publication of Public Relations Office.Newsletter showcases memorable events and news related to the University"
  let links = ["Gender Equity (USPCAS-W)", "MUET Gender Policy Statement" , "Harassment Complaint Cell"];
  return (
    <div id="main">
      <div className="mainContent">
        <LargeImgCard />
        <div className="notifications">
          <div>
            <span>NOTIFICATIONS</span>
            <span>This is a temporary message</span>
          </div>
          <div className="viewAll">View All</div>
        </div>
        <div className="cardContainerOne">
        <Card  
          title = "Gender Equality"
          image = "cardImage(1).png"
          desc={desc1}
          links={links}
          />
          <Card  
          title = "Gender Equality"
          image = "cardImage(2).png"
          desc={desc2}
          links={links}
          />
          <Card  
          title = "Gender Equality"
          image = "cardImage(1).png"
          desc={desc1}
          links={links}
          />
  
          <NewsAndEvents />
        </div>
        <div className="cardContainerTwo">
        <Card  
          title = "Gender Equality"
          image = "cardImage(3).png"
          desc={desc3}
          links={links}
          />
          <Card  
          title = "Gender Equality"
          image = "cardImage(4).png"
          desc={desc4}
          links={links}
          />
          <Card  
          title = "Gender Equality"
          image = "cardImage(5).png"
          desc={desc5}
          links={links}
          />
          
        </div>
        <div className="smallImages">
          <SmallImgCard />
          <SmallImgCard />
          <SmallImgCard />
        </div>
        <div className="quickInfo">
          <QuickInfo />
        </div>
      </div>
    </div>
  );
};

export default Main;