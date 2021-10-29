import styled from "styled-components"

export const FooterWrapper = styled.section`
	width: 100%;
  max-width: 1500px;
  padding: 2rem 48px 40px;
  box-sizing: content-box;
  background-color: #000d1a;
  height: 40%;
  background-color:#676cf5npm staa;
  border-radius: 10px 10px 0px 0px;


  @media screen and (max-width: 640px) 
    {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkItem = styled.a`
	line-height: 30px;
	font-size: 0.8rem;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	align-self: center;
	left: 0;

	&:hover {
		color:#FECDE8;
		left: 6px;
		transform: translateY(-2px);
	}



	@media screen and (max-width: 768px){
		font-size: 0.54rem;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
		margin-right:5px;
		padding: 15px;
		text-decoration: none;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;
margin-right: -1rem;

@media screen and (max-width: 768px) {
    {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 640px) {
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

    @media screen and (max-width: 768px) 
{
		flex-direction: coumn;
		align-items: baseline;
	}

    @media screen and (max-width: 640px) {
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Slogan = styled.p`
	color:white;
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media screen and (max-width: 768px) {

		font-size: 16px;
		line-height: 28px;
	}

	@media screen and (max-width: 640px) {

		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {

		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

  @media screen and (max-width: 1024px) {
    {
		padding: 32px 0 16px;
	}

    @media screen and (max-width: 768px) {
        {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media screen and (max-width: 640px) {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
	margin: auto;
	align-items: center;
	align-self:center;
	justify-self: center;
	@media screen and (max-width: 768px){
		padding: 5px;
	}
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: white;
	margin-bottom: 16px;

	@media screen and (min-width: 640px) {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`

export const BackToTopButton = styled.button`
position: fixed;
bottom: 20px;
right: 20px;
display: none;

`;

export const LinkedinSocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 80px;
  padding:10px;
  font-size:4rem;
  margin: 3%;
&:hover {
    background-color:white; 
    transform: scale(1.1);
    cursor: pointer;
    padding: 10px;
    color: #3244a8;
    
  }
  @media screen and (max-width:640px){
    font-size:2.3rem;
    
  }
`
export const GithubSocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 80px;
  padding:10px;
  font-size:4rem;
  margin: 3%;
&:hover {
    background-color:white; 
    transform: scale(1.1);
    cursor: pointer;
    padding: 10px;
    color: black;
    
  }
  @media screen and (max-width:640px){
    font-size:2.3rem;
    
  }
`
export const InstagramSocialIcons = styled.a`
transition: 0.3s ease-in-out;
color: white;
border-radius: 80px;
  padding:10px;
  font-size:4rem;
  margin: 3%;
&:hover {
    background-color:white; 
    transform: scale(1.1);
    cursor: pointer;
    padding: 10px;
    color: red;
 
    
  }
  @media screen and (max-width:640px){
    font-size:2.3rem;
    
  }
`

