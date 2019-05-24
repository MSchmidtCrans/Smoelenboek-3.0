# Smoelenboek-3.0
Based on prior exercises in Codegorilla - This version includes simple jQuery filtering and a Grid lay-out.
Update: Added backend functionality to pull data
Update: Add create, delete and edit functionality

Demo page: (Momentarily not working because of use of local Db in a local virtual machine.) https://mschmidtcrans.github.io/Smoelenboek-3.0/

Used techniques :
CSS (grid)
HTML
JQUERY
PHP
AJAX
Javascript

<b>Initial setup:</b>

1. Setup repo on GitHub and local station - DONE

2. Setup CSS Grid on paper -DONE-

3. Apply Grid to CSS Stylesheet -DONE-

4. Style remaining elements

5. Publish on GitHub


<b>New Branch 'Use backend to pull index card data':</b>

1. Create test .txt file -DONE-

2. Create PHP script to pull data from textfile -DONE-

3. Use simple HTML page to display results from PHP script -DONE-

4. Show decoded JSON on test html Page -DONE-

5. Adapt original JS with AJAX-JQuery to receive JSON data from backend -DONE-

6. Extend test text file with more entries -DONE-

7. Check if the PHP script accepts the new array -DONE-

8. Adapt JS to itterate through more then one entrie from backend. -DONE-

9. Clean up JS and adapt CSS for responsiveness -DONE-

<b>New Branch 'Add create, delete and edit functionality'</b>

1. Make create address button in Header -DONE-
    a. Make a div to display entry fields
    b. Use css to hide/show entry fields
    c. Reset fields upon cancel and close data entry div

2. Connect button with PHP script -DONE-
    a. Put form data in array
    b. Transform from array into clean json object
    c. Check communication with ajax calls

3. Create PHP script to create new record in database -DONE-
    a. Test DB insert with plain data
    b. Add variables to SQL insert statement

4. Display new record correctly in html -DONE-
    a. Start new data pull
    b. Create form reset function
    c. Reset data entry fields

5. Upon selecting address card display all card values in form entry fields for followup functions: delete and edit. -DONE-
    a. Add unique id field to form data entry
    b. Create click event in Jquery to get unique id
    c. Use id to search database with ajax call on php search script
    d. Display database values in form fields

6. Make delete address button on address div -DONE-

7. Connect button with PHP script -DONE-

8. Create PHP script to delete record in database -DONE-

9. Remove new record correctly in html -DONE-

10. Edit save button functionality to decide wether to update or create record in database

12. Update PHP script to update record in database

13. Display updated record correctly in html
