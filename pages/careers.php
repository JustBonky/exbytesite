<?php
/*
    Template Name: Careers page
    Template Post Type: page
*/
?>

<?php get_header(); ?>

    <main class="body-content container" id="body-content" role="main">
        <h2 class="jobs-suptitle">Jobs</h2>
        <section class='jobs-section' first-sec="true">
            <h1 class='jobs-title'>Our openings</h1>
            <div class='jobs-items'>
                <?php
                $jobs = new WP_Query([
                    'post_type' => 'es_jobs',
                    'post_status' => 'publish'
                ]);
                ?>
                <?php if ($jobs->have_posts()) : ?>
                    <?php while ($jobs->have_posts()) : $jobs->the_post(); ?>
                        <div class="jobs-item">
                            <div class="jobs-item_title">
                                <?= CFS()->get('job_name'); ?>
                            </div>
                            <div class="jobs-item_body">
                                <div class="jobs-item_loc">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
                                              stroke="#BBBBBC" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                        <path d="M12 21C12 21 19 16.1538 19 9.92308C19 8.08696 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8565 3 12 3C10.1435 3 8.36301 3.72939 7.05025 5.02772C5.7375 6.32605 5 8.08696 5 9.92308C5 16.1538 12 21 12 21Z"
                                              stroke="#BBBBBC" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                    <?= CFS()->get('job_location'); ?>
                                </div>
                                &nbsp;-&nbsp;
                                <div class="jobs-item_type">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20L7 20" stroke="#BBBBBC" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                        <path d="M18 17H16" stroke="#BBBBBC" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                        <path d="M13 9H4C3.44772 9 3 9.44772 3 10V16C3 16.5523 3.44772 17 4 17H13"
                                              stroke="#BBBBBC" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                        <path d="M17 7H17.002V7.002H17V7Z" stroke="#BBBBBC" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M20 4H14C13.4477 4 13 4.44772 13 5V19C13 19.5523 13.4477 20 14 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4Z"
                                              stroke="#BBBBBC" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                    <?= CFS()->get('job_type'); ?>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="jobs-item_time">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                              stroke="#BBBBBC" stroke-width="2" stroke-miterlimit="10"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 7V12H17" stroke="#BBBBBC" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                    <?= CFS()->get('job_time'); ?>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div class="jobs-item_game">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 6C17 6.35064 16.9398 6.68722 16.8293 7L20 7C20.5523 7 21 7.44772 21 8V11.1707C20.6872 11.0602 20.3506 11 20 11C18.3431 11 17 12.3431 17 14C17 15.6569 18.3431 17 20 17C20.3506 17 20.6872 16.9398 21 16.8293V20C21 20.5523 20.5523 21 20 21H8C7.44772 21 7 20.5523 7 20V16.8293C6.68722 16.9398 6.35064 17 6 17C4.34315 17 3 15.6569 3 14C3 12.3431 4.34315 11 6 11C6.35064 11 6.68722 11.0602 7 11.1707V8C7 7.44772 7.44772 7 8 7L11.1707 7C11.0602 6.68722 11 6.35064 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z"
                                              stroke="#BBBBBC" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                    <?= CFS()->get('job_game'); ?>
                                </div>
                            </div>
                            <div class="jobs-item_handler">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16H24" stroke="white" stroke-width="2.66667" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M16 24L16 8" stroke="white" stroke-width="2.66667" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="jobs-item_text">
                                <div class="jobs-item_text_descr_title">Description:</div>
                                <div class="jobs-item_text_descr">
                                    <?= CFS()->get('job_desciption'); ?>
                                </div>
                                <div class="jobs-item_text_req_title">Requirements:</div>
                                <div class="jobs-item_text_req">
                                    <?= CFS()->get('job_requirements'); ?>
                                </div>
                                <div class="jobs-item_apply">
                                    <button class="prm-btn-white">Apply to Position</button>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </section>
    </main>

<?php get_footer(); ?>