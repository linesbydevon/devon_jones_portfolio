export default function Button({url, children}){
  return(
    <a href={url} rel="noreferrer" target="_blank">{children}</a>
  )
}