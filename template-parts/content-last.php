<?php
$button_text = get_field('button_text');
$button_content = get_field('button_content');

?>

<div class="div-block-15">
<div data-w-id="13d89fc0-978c-a5d7-5dd8-14091d73373b" class="div-block-40 modal">
  <div class="div-block-41 w-clearfix">
    <a href="#" data-w-id="1e88e741-8e04-a4f0-8cfd-af6dd85518f7" class="link-11">Close X</a>
    <h1 class="heading-19">Sign up for goodies</h1>
    <p class="paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
      id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
    <div class="w-form">
      <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
        <label for="name-3" class="field-label-7">Name:</label>
        <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" id="name-2">
        <label for="email-3" class="field-label-8">Email Address:</label>
        <input type="text" class="w-input" maxlength="256" name="email-2" data-name="Email 2" id="email-2" required="">
        <input type="submit" value="JOIN ME" data-wait="Please wait..." class="submit-button-4 w-button">
        <p class="paragraph-16">No Spam, just some good info you would like.</p>
      </form>
      <div class="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div class="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  </div>
</div>
 <h1 class="heading-10"><?php echo $button_text;?></h1>
 <a href="#" data-w-id="447913fd-49d5-938c-f1c7-16b5bc980535" class="button w-button"><?php echo $button_content;?></a>
</div>
