/**
 * Converts a string to a lowercase, hyphen-separated ID-friendly format
 */
export function toId(str: string): string {
  return str
    .toLowerCase()               
    .trim()                      
    .replace(/[^\w\s-]/g, '')    
    .replace(/\s+/g, '-')        
    .replace(/-+/g, '-');        
}
