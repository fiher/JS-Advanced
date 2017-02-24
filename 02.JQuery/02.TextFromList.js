/**
 * Created by Lucifer on 18-Oct-16.
 */
function extractText(){
        let items = $("ul#items li")
            .toArray()
            .map(li => li.textContent)
            .join(', ');
        $("#result").text(items);
}