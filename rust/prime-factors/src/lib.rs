pub fn factors(n: u64) -> Vec<u64> {

    if n == 1 {
        return vec![];
    }

    let mut : Vec<u64> = vec![];

    for i in {1..n+1} {
        
        println!("i+1: {}", i);
        
        if n % i == 0 {

        }


        // loop through all smaller numbers and see if there is a divisor
        for divisor in {1..n} {
            
            if i % divisor == 0 {
                
            }

            println!("i+1: {}", i);
            
        }
        
        
    }

    unimplemented!("This should calculate the prime factors of {}", n)
}
