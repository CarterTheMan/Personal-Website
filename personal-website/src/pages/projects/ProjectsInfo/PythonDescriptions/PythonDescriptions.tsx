import React from 'react';
import './PythonDescriptions.css';

export const GeneticAlgorithmWordsDescription: React.ReactNode = 
<div className='pythonDescriptions'>
    <p>This is a program that takes a phrase that the user inputs and starting with a random “population”, it mirrors evolution in real life, to reach the users starting input. For this explanation we will say that the users input is “hello world”. </p>
    <ol>
        <li>
            The program starts out with an initial “population” which is made of “individuals”. Each individual is made of characters, which can be called “genes”.
        </li>
        <li>
            Then for each individual it determines their “fitness” based on how many characters from that individual match the users input
            <ul>
                <li>For example “jells mirld” would have a fitness of 6</li>
            </ul>
        </li>
        <li>
            Then it creates a fitness array that contains each individual based on their fitness.
            <ul>
                <li>An individual with a fitness of 6 would be in the fitness array 6 times while something with a fitness of 0 wouldn’t be in the array.</li>
            </ul>
        </li>
        <li>
            Next is reproduction, which randomly selects two “parents” from the fitness array and creates a child based on the two adults.
            <ul>
                <li>If the parents are “hecks worth” and “jello wirld” the child could potentially be “hello world”</li>
            </ul>
        </li>
        <li>
            The final step is mutation which could randomly change single letters in each individual.
            <ul>
                <li>“hello thire” could mutate and become “hello there” if the “i” in thire becomes an e</li>
            </ul>
        </li>
        <li>
            Repeat steps 2-5 until the desired outcome. Each time you go through those steps it’s called a generation.
        </li>
    </ol>
</div>