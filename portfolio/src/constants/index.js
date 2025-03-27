import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a passionate Java  developer with a knack for crafting robust and scalable web applications. With  of hands-on experience, I have honed my skills in front-end technologies like React , as well as back-end technologies like  MySQL, Spring. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React.js, Java, MySQL,and Spring . My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Credit Card Fraud Detection",
    image: project1,
    description:
      "Credit card fraud is a serious problem in financial services. Billions of dollars are lost due to credit card fraud every year. There is a lack of research studies on analyzing real-world credit card data owing to confidentiality issues. In this paper, machine learning algorithms are used to detect credit card fraud. Standard models are firstly used. Then, hybrid methods which use AdaBoost and majority voting methods are applied. To evaluate the model efficacy, a publicly available credit card data set is used. Then, a real-world credit card data set from a financial institution is analyzed. In addition, noise is added to the data samples to further assess the robustness of the algorithms. The experimental results positively indicate that the majority voting method achieves good accuracy rates in detecting fraud cases in credit cards.",
    technologies: ["Java/J2EE(JSP,Servlet)", "J2EE", "MySQL"],
  },
  {
    title: "Ashok -LeyLand",
    image: project2,
    description:
      "In this project I am create a portal that is help to Admin and Manager. Manager can easilyupdate showroom information like( Store view, Add Sales, Add Walk-ins, Add Store Expenditure, Rise ticket, History).Admin can add all showrooms and managers , he can resolve all the issues which are coming from individual showrooms and He can view all the updates about showrooms.Whenever admin can free open a portal and he know the overall information about particular showroom. Admin no longer needs to wait for responses or updates as all showroom updates are readily available on the portal. Admin can analyze information on product demand by region and adjust product supply accordingly.",
    technologies: ["HTML", "CSS", "PYTHON", "Sqlite", "Django"],
  },
];

export const CONTACT = {
  phoneNo: "+91 8639581140",
  email: "chandugirra833@gmail.com",
};
