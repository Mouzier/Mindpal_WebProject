# Mindpal Web Project

Team members: Amasa Yaswanth, Baindla Goutham, Chejarla Sandeep, Gagan Hegde

Creation of a mental health web application for students

HTML, CSS, JavaScript was used to develop this.The database used is MYSQL. The Stack used for this project is Django Stack.

This project has been divided into various modules:-
a. Forum: A page where users can share their experiences and thoughts, which can be reacted on by other users (Still in development)
b. Counsellor: The student users, if they want to, can interact with the counsellor. The counsellor can create meeting to communicate personally with the student user (This has taken the form of chatroom)
c. Enlightenment: This module handles valuable knowledge that can prove useful for the students to relax and improve their mental state. If not within the scope of the module, it will guide the users to relevant and curated external sources. (Currently, this has taken the form of "Serene Space")
d. Mood detector: This module is created to figure out the mood of the student user. Once the mood is found out, the student user is guided towards different mood elevation methods (Mood booster). 
e. Mood booster: This module handles all mood elevation methods. The student user can independently access it at their leisure. (This redirects to "Serene Space" and the game is still in development)

We had an intense brainstorming session. We needed a proper scientifically vetted method for finding out the mood of the student user. We finalized on a reduced POMS (Profile of Mood States) test. Next, we gathered information regarding the various methods that can appeal to students. The idea was to make the website relate with this generation of students.

Current Progress report:
1. Homepage has been implemented with the various links to other modules
2. Mindreader detects the current mood of the user with questions related to various moods potrayed via images
3. Game has been implemented but integrating it within the website has been difficult
4. Serene space has been implemented (Which is a relaxation zone for students, giving serene music and breathing techniques to calm the mind)
5. Feedback page has been implemented but has to be connected to database
6. Chatroom feature works as a standalone module but implementing it with the website has been limited due to time restrictions

Future:
1. Homepage has to be improved in terms of UI
2. Game has to be integrated with the website
3. Chatroom functionality has to be integrated with the website
4. Database has to be implemented for the rest


Instructions to host locally:
1. Open commandline in the directory with 'manage.py'
2. A developer profile needs to have Django version 3.2.7 (At time of creation of this document). They will also need to have Python version 3.9.7 to program on Django. They also need to set up MySQL or SQLite for the database.
3. Run the command 'py manage.py runserver'
4. For the standalone chat, you need 'docker', a container program which provide a virtual environment for compatibility among different system. This can be used for the entire program also

For any queries, send contact us on Telegram - Gagan Hegde
