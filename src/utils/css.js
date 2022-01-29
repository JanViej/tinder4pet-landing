export const CSS_RESET = `
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  blockquote,
  figure,
  img,
  hr {
   margin: 0;
   padding: 0;
  }
  
  
  embed,
  iframe,
  img,
  object,
  video {
   display: block;
   max-width: 100%;
  }
  
  table {
   table-layout: fixed;
   width: 100%;
  }
  
  [hidden] {
   display: none;
  }
  
`;

export const CSS_COMMON = `
.mt-20 {
  margin-top: 20px;
}
.mt-10 {
  margin-top: 10px;
}

.mb-10 {
  margin-bottom:10px;
}

.flex-1 {
  flex: 1;
}
.d-block {
  display:block;
}
.d-none {
  display:none;
}
.fw-bold {
  font-weight: bold;
}
.text-underline {
  text-decoration: underline;
}
`;
