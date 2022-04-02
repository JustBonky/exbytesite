<div class="search-form-wrapper">
    <form class="search-form" role="search" method="get" id="searchform" action="<?= home_url('/blog') ?>">
        <input class="search-form__input" type="text" name="s" id="s" autocomplete="off" placeholder="SEARCH"/>
        <button type="submit" id="searchsubmit">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7222 21.4445C17.0917 21.4445 21.4445 17.0917 21.4445 11.7222C21.4445 6.35279 17.0917 2 11.7222 2C6.35279 2 2 6.35279 2 11.7222C2 17.0917 6.35279 21.4445 11.7222 21.4445Z"
                      stroke="white" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.667 18.6666L27.0003 27" stroke="white" stroke-width="2.77778" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        </button>
    </form>
    <ul class="ajax-search"></ul>
</div>