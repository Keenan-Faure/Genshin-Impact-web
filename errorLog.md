Error Log
--

Date - 22/02/2022

Problem
--
After opening the 'middleButtonsContainer' by clicking on the 'middleBody', it opens it successfully. However, after clicking
on the <span></span> closeButton it successfully closes the 'middleButtonsContainer', but it cannot open again after the first iteration.
I have tried switching from the element.addEventListener, to the onClick, to using scripts, but nothing worked.

![image](https://user-images.githubusercontent.com/97687673/155160059-35773a7c-4cf7-454a-bf87-029ec0539f31.png)


Solution
--
The Solution involved placing the middle Container outside of the middleBody, because when clicking the closeButton, it does get clicked, but afterwards the onclick of the middleBody overrides the onclick of the closeButton, causing it not to change at all.
