import { styled } from 'frontity'

const PostContent = styled.div`
  max-width: 932px;
  margin: auto;
  padding: 2rem 0 2.2rem 0;

  h1 {
      line-height: 1;
  }

  p, ul, h1, h2, h3 {
      margin-bottom: 1.5rem;
  }
  
  ul {
      padding-left: 3rem;
  }
  a {
      color: #0e49b5;
      text-decoration: underline;
      &:hover {
          text-decoration: none;
      }
  }
`
export default PostContent;