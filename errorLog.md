Error Log
--

Date - 22/02/2022
--

Problem
--
After opening the 'middleButtonsContainer' by clicking on the 'middleBody', it opens it successfully. However, after clicking
on the <span></span> closeButton it successfully closes the 'middleButtonsContainer', but it cannot open again after the first iteration.
I have tried switching from the element.addEventListener, to the onClick, to using scripts, but nothing worked.

Solution
--
The Solution involved placing the middle Container outside of the middleBody, because when clicking the closeButton, it does get clicked, but afterwards the onclick of the middleBody overrides the onclick of the closeButton, causing it not to change at all.