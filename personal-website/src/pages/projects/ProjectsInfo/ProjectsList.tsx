import {GeneticAlgorithmWordsDescription as pythonGAW} from "./PythonDescriptions/PythonDescriptions"
import { GeneticAlgorithmWordsDescription as javaGAW, GeneticAlgorithmRocketsDescription, GravityDescription, MazeDescription} from "./JavaDescriptions/JavaDescriptions"
import { CandyShopDescription} from "./CDescriptions/CDescriptions"

export const pythonProjects = [
    {
        title : "Genetic Algorithm (Words)", 
        cardDescription : "This is a genetic algorithm that takes a users input and, starting with a random population, keeps evolving to arrive at the desired solution", 
        description : pythonGAW,
        videoID : ["qMwpZsCMQm0"],
        videoDescriptions : [],
        imagePath : '/projectimages/python/Genetic-Algorithm.jpg',
        codeLink : "https://github.com/CarterTheMan/Python-Projects/tree/main/Genetic%20Evolution%20(Words)",
    }
]

export const javaProjects = [
    {
        title : "Genetic Algorithm (Words)", 
        cardDescription : "This is a genetic algorithm that takes a users input and, starting with a random population, keeps evolving to arrive at the desired solution. The phrases can be up to 45 characters long with success in this program. It can be made to solve to larger phrases by increasing the amount of times a desired member of the population is added to the fitness array (discussed in the project). You can see how this program starts at complete chaos but eventually evolves and arrives at a desired solution.", 
        description : javaGAW,
        videoID : ["u886fNutFCE", "fY5qSjTZVs8"],
        videoDescriptions : ["Shorter Example", "Longer Example"],
        imagePath : '/projectimages/java/Genetic-Algorithm-Words.jpg',
        codeLink : "https://github.com/CarterTheMan/Java-Projects/tree/main/Genetic%20Algorithm%20(Words)",
    },
    {
        title : "Genetic Algorithm (Rockets)", 
        cardDescription : "This is a genetic algorithm that has a target point, the black circle, and, starting with a random population, keeps evolving to have the population get closer and closer to the target point. It almost will never get to the exact point due to the random mutations in the population but it will get very close. You can actually see how the population evolves over time to become more and more accurate.", 
        description : GeneticAlgorithmRocketsDescription, 
        videoID : ["MmCmq4J1QuI", "P7dfcSnnSns"],
        videoDescriptions : ["Rockets Only", "Rockets with Average Line"],
        imagePath : '/projectimages/java/Genetic-Algorithm-Rockets.jpg',
        codeLink : "https://github.com/CarterTheMan/Java-Projects/tree/main/Genetic%20Algorithm%20(Rockets)",
    },
    {
        title : "Gravity", 
        cardDescription : "This is a program that simply has gravity. The movements of each objects is manipulated based on the other objects and their size. Basically, each object feels the gravity of each other object. In the start, all circles are apart so they are all pulling on each other, but eventually, over time they will all clump together into on large group. At this point the program is simply restarted.", 
        description : GravityDescription,
        videoID : ["HDXv5t3TF_k"],
        videoDescriptions : [],
        imagePath : '/projectimages/java/Gravity.jpg',
        codeLink : "https://github.com/CarterTheMan/Java-Projects/tree/main/Gravity",
    },
    {
        title : "Maze with Search Algorithms", 
        cardDescription : "This is a program that allows the user to make their own maze or upload a file that contains a maze. Once the maze is created, the user can then choose a breadth first search, depth first search or A* search to find the path through the maze. Each kind of search has its own advantages and disadvantages. For example, the fastest search is the A* search but this requires the program to know the end of the maze when it starts. The depth first search and breadth first search do not need to know the end of the maze, but are much slower. This was a super fun and educational project for me to work on. I learn a lot about maze searches and how to use graphics in Java with this project.", 
        description : MazeDescription,
        videoID : [
            "TsYQeUCind8", "WXKU7yv1n6A", "j5Sf1vBn8sY", 
            "VmM3pYJizFM", "kw3v4bwH-cQ", "3CdQl_COxHY", 
            "LgvkCn2LiRQ", "x_qFqfHMTpc", "npqQe06aqQY"
        ],
        videoDescriptions : [
            "BFS Maze Creation Long", "BFS Maze Creation Short", "BFS Maze Premade",
            "DFS Maze Creation Long", "DFS Maze Creation Short", "DFS Search Pre-Made", 
            "A* Search Creation Long", "A* Search Creation Short", "A* Search Premade"
        ],
        imagePath : '/projectimages/java/Maze.jpg',
        codeLink : "https://github.com/CarterTheMan/Java-Projects/tree/main/Maze%20with%20Searches",
    }
]

export const CProjects = [
    {
        title : "Candy Shop", 
        cardDescription : "A candy store owner keeps his inventory of candy organized in a flat text file using his own home brew format. This project takes in a file and manages the inventory of the candy shop.", 
        description : CandyShopDescription,
        videoID : [],
        videoDescriptions : [],
        imagePath : '/projectimages/c/Candy-Shop.jpg',
        codeLink : "https://github.com/CarterTheMan/COM-S-327/tree/main/Final",
    }
]