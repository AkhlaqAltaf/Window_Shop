package ArithmaticMean;

public class shifting {

	public static void main(String[] args) {
		
		int[] a= {1,2,3,4,5};
		
		
		//int temp=a[0];
		
		for (int i=0;i<a.length;i++) {
			
			int j=(int)(Math.random()*a.length);
		
			int temp=a[i];
			
			a[i]=a[j];
			
			//a[j]=temp;
			
			
		
			
		}System.out.println("  \n");
		
		
		for(int i=0;i<a.length;i++) {
			
			System.out.println("  "+a[i]);
		}

	}

}
