package ArithmaticMean;

import java.util.*;

public class Formula {

	
	
	public static void main(String[] args) {
		Scanner in=new Scanner(System.in);
        ArrayList<Double> listA=new ArrayList<>();
		
        double sum=0,arithmatic_mean;
        int	count=0;
        int i=0;
        
        System.out.println("Enetr Data");
        
        
       do {
        	
        	listA.add(in.nextDouble());
        	
        	++count;
        	
        i++;
     
        
        	if(listA.contains(000.0)) {
        		
        		break;
        		
        		
        	}      	
        } 
       while(i<=count);
       for(i=0;i<listA.size();i++) {
    	   
    	   sum=sum +listA.get(i);
       }
       
       count=count-1;
   	System.out.println("Sum of Data  sum :  "+sum);
   	
   	System.out.println("Total Number  N  :  "+count);
   	
   	arithmatic_mean=sum/count;
   	
   	System.out.println("Arithmatic Mean is  :  "+arithmatic_mean);
   	
       
    	
    	in.close();
		
		

	}

}
