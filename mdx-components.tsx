import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({children}) => (
      <h2 className='my-4 text-lg'>{children}</h2>
    ),
    li: ({children}) => (
      <li className='my-2'>{`> ${children}`}</li>
    ),
    p: ({children}) => (
      <p className='my-6'>{children}</p>
    ),
    ...components,
  }
}