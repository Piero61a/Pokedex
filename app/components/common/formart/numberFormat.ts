export default function formatNumber(num: string): string {
    const numValue = Number(num); 
  
    if (numValue < 100) {
      return String(numValue).padStart(3, '0'); 
    }
  
    return String(numValue); 
  }