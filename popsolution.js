//change 10 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What was the primary motivation for Westward Expansion in the 19th century?"
choice1[1]="Exploration"
choice1[2]="Gold rush"
choice1[3]="Education reform"
choice1[4]="Environmental conservation"

question[2]="Which legislation encouraged Western migration by providing land to settlers?"
choice2[1]="Homestead Act"
choice2[2]="Missouri Compromise"
choice2[3]="Dawes Act"
choice2[4]="Kansas-Nebraska Act"

question[3]="What was the significance of the Oregon Trail?"
choice3[1]="It was a trade route to Asia."
choice3[2]="It connected the Eastern states to the West Coast."
choice3[3]="It was a route for immigrants to Europe."
choice3[4]="Shanghai (China)"

question[4]="Which event marked the start of the California Gold Rush?"
choice4[1]="The Treaty of Guadalupe Hidalgo"
choice4[2]="The discovery of gold at Sutter's Mill"
choice4[3]="The signing of the Homestead Act"
choice4[4]="The completion of the Transcontinental Railroad"

question[5]="What was the main purpose of the Transcontinental Railroad?"
choice5[1]="To promote tourism"
choice5[2]="To connect the East and West coasts"
choice5[3]="To facilitate military transportv"
choice5[4]="To improve communication"

question[6]="Which Native American tribe was famously forced to relocate during the Trail of Tears?"
choice1[1]="Sioux"
choice1[2]="Cherokee"
choice1[3]="Apache"
choice1[4]="Nez Perce"

question[7]="What concept was used to justify American expansion across the continent?"
choice2[1]="Manifest Destiny"
choice2[2]="American Exceptionalism"
choice2[3]="Isolationism"
choice2[4]="Colonialism"

question[8]="Which of the following territories was acquired through the Gadsden Purchase?"
choice3[1]="Alaska"
choice3[2]="Hawaii"
choice3[3]="Parts of Arizona and New Mexico"
choice3[4]="Texas"

question[9]="Who was the U.S. President during the Louisiana Purchase?"
choice4[1]="George Washington"
choice4[2]="Thomas Jefferson"
choice4[3]="James Madison"
choice4[4]="Andrew Jackson"

question[10]="What was the main outcome of the Mexican-American War?"
choice5[1]="The U.S. gained independence from Mexico."
choice5[2]="Mexico ceded a large portion of its territory to the U.S."
choice5[3]="The U.S. established diplomatic relations with Mexico."
choice5[4]="The U.S. adopted a policy of neutrality."

solution[1]="b"
solution[2]="a"
solution[3]="b"
solution[4]="b"
solution[5]="b"
solution[6]="b"
solution[7]="a"
solution[8]="c"
solution[9]="b"
solution[20]="b"


