export default function Button({url, children, download}){
  return(
    <a href={url} rel="noreferrer" target="_blank" download={download ? true : false}>{children}</a>
  )
}