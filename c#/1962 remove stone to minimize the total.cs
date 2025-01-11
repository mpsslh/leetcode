//slower approach
public class Solution {
    public int MinStoneSum(int[] piles, int k) {
                List<int> listOfPiles = (new List<int> (piles)).OrderByDescending(l=>l).ToList(); 
                int index = 0;
                for(int i =0; i<k ; i++){
                    listOfPiles[index] -= listOfPiles[index] / 2;
                    listOfPiles = listOfPiles.OrderByDescending(l=>l).ToList(); 
                }
                return listOfPiles.Sum();
    }
}


//Chatgpt
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int MinStoneSum(int[] piles, int k) {
        // Use a max-heap to keep track of the largest piles
        var maxHeap = new PriorityQueue<int, int>(Comparer<int>.Create((a, b) => b.CompareTo(a)));

        // Add all piles to the heap
        foreach (var pile in piles) {
            maxHeap.Enqueue(pile, pile);
        }

        // Perform k operations
        for (int i = 0; i < k; i++) {
            // Remove the largest pile
            int largestPile = maxHeap.Dequeue();
            // Halve it (rounding down) and put it back into the heap
            int reducedPile = largestPile - largestPile / 2;
            maxHeap.Enqueue(reducedPile, reducedPile);
        }

        // Calculate the sum of the remaining piles
        int sum = 0;
        while (maxHeap.Count > 0) {
            sum += maxHeap.Dequeue();
        }

        return sum;
    }
}
