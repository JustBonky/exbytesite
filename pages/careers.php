<?php
/*
    Template Name: Careers page
    Template Post Type: page
*/
?>

<?php
get_header();
?>

    <main class="body-content container" id="body-content" role="main">
        <form id="contact-us-form" class="contact-us-form">
            <h1><?= get_the_title(); ?></h1>
            <div class="contact-us-form_name input-label-half-form">
                <label for="art_name">Name:</label>
                <input type="text" name="art_name" id="art_name" class="required art_name" placeholder="Martin"/>
            </div>
            <div class="contact-us-form_email input-label-half-form">
                <label for="art_email">Email:</label>
                <input type="email" name="art_email" id="art_email" class="required art_email" placeholder="Queens"/>
            </div>

            <div class="contact-us-form_text">
                <textarea name="art_comments" id="art_comments" placeholder="Text something" rows="10" cols="30"
                          class="required art_comments"></textarea>
            </div>

            <input type="checkbox" name="art_anticheck" id="art_anticheck" class="art_anticheck"
                   style="display: none !important;" value="true" checked="checked"/>

            <input type="text" name="art_submitted" id="art_submitted" value="" style="display: none !important;"/>

            <button type="submit" id="submit-feedback" class="button prm-btn-white">Send</button>
        </form>
    </main>
<?php
get_footer();
?>