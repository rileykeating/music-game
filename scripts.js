document.addEventListener('DOMContentLoaded', function() {
    const albums = [
        { 
            name: 'Please Please Me', 
            image: 'pleasepleaseme.png', 
            songs: [
                'I Saw Her Standing There',
                'Misery',
                'Anna (Go To Him)',
                'Chains',
                'Boys',
                'Ask Me Why',
                'Please Please Me',
                'Love Me Do',
                'P.S. I Love You',
                'Baby It\'s You',
                'Do You Want To Know A Secret',
                'A Taste Of Honey',
                'There\'s A Place',
                'Twist And Shout'
            ] 
        },
        { 
            name: 'With The Beatles', 
            image: 'withthebeatles.png', 
            songs: [
                'It Won\'t Be Long',
                'All I\'ve Got To Do',
                'All My Loving',
                'Don\'t Bother Me',
                'Little Child',
                'Till There Was You',
                'Please Mister Postman',
                'Roll Over Beethoven',
                'Hold Me Tight',
                'You Really Got A Hold On Me',
                'I Wanna Be Your Man',
                'Devil In Her Heart',
                'Not A Second Time',
                'Money (That\'s What I Want)'
            ] 
        },
        { 
            name: 'A Hard Day\'s Night', 
            image: 'aharddaysnight.png', 
            songs: [
                'A Hard Day\'s Night',
                'I Should Have Known Better',
                'If I Fell',
                'I\'m Happy Just To Dance With You',
                'And I Love Her',
                'Tell Me Why',
                'Can\'t Buy Me Love',
                'Any Time At All',
                'I\'ll Cry Instead',
                'Things We Said Today',
                'When I Get Home',
                'You Can\'t Do That',
                'I\'ll Be Back'
            ] 
        },
        { 
            name: 'Beatles For Sale', 
            image: 'beatlesforsale.png', 
            songs: [
                'No Reply',
                'I\'m A Loser',
                'Baby\'s In Black',
                'Rock And Roll Music',
                'I\'ll Follow The Sun',
                'Mr Moonlight',
                'Kansas City - Hey-Hey-Hey-Hey - Medley',
                'Eight Days A Week',
                'Words Of Love',
                'Honey Don\'t',
                'Every Little Thing',
                'I Don\'t Want To Spoil The Party',
                'What You\'re Doing',
                'Everybody\'s Trying To Be My Baby'
            ] 
        },
        { 
            name: 'Help!', 
            image: 'help.png', 
            songs: [
                'Help!',
                'The Night Before',
                'You\'ve Got To Hide Your Love Away',
                'I Need You',
                'Another Girl',
                'You\'re Going To Lose That Girl',
                'Ticket To Ride',
                'Act Naturally',
                'It\'s Only Love',
                'You Like Me Too Much',
                'Tell Me What You See',
                'I\'ve Just Seen A Face',
                'Yesterday',
                'Dizzy Miss Lizzy'
            ] 
        },
        { 
            name: 'Rubber Soul', 
            image: 'rubbersoul.png', 
            songs: [
                'Drive My Car',
                'Norwegian Wood (This Bird Has Flown)',
                'You Won\'t See Me',
                'Nowhere Man',
                'Think For Yourself',
                'The Word',
                'Michelle',
                'What Goes On',
                'Girl',
                'I\'m Looking Through You',
                'In My Life',
                'Wait',
                'If I Needed Someone',
                'Run For Your Life'
            ] 
        },
        { 
            name: 'Revolver', 
            image: 'revolver.png', 
            songs: [
                'Taxman',
                'Eleanor Rigby',
                'I\'m Only Sleeping',
                'Love You To',
                'Here, There And Everywhere',
                'She Said She Said',
                'Good Day Sunshine',
                'And Your Bird Can Sing',
                'For No One',
                'Doctor Robert',
                'I Want To Tell You',
                'Got To Get You Into My Life',
                'Tomorrow Never Knows'
            ] 
        },
        { 
            name: 'Sgt. Pepper\'s Lonely Hearts Club Band', 
            image: 'sgtpepperslonelyheartsclubband.png', 
            songs: [
                'Sgt. Pepper\'s Lonely Hearts Club Band',
                'With A Little Help From My Friends',
                'Lucy In The Sky With Diamonds',
                'Getting Better',
                'Fixing A Hole',
                'She\'s Leaving Home',
                'Being For The Benefit Of Mr. Kite!',
                'Within You Without You',
                'When I\'m Sixty-Four',
                'Lovely Rita',
                'Good Morning Good Morning',
                'Sgt. Pepper\'s Lonely Hearts Club Band (Reprise)',
                'A Day In The Life'
            ] 
        },
        { 
            name: 'Magical Mystery Tour', 
            image: 'magicalmysterytour.png', 
            songs: [
                'Magical Mystery Tour',
                'The Fool on the Hill',
                'Flying',
                'Blue Jay Way',
                'Your Mother Should Know',
                'I Am the Walrus',
                'Hello, Goodbye',
                'Strawberry Fields Forever',
                'Penny Lane',
                'Baby, You\'re a Rich Man',
                'All You Need Is Love'
            ] 
        },
        { 
            name: 'The Beatles', 
            image: 'thebeatles.png', 
            songs: [
                'Back in the U.S.S.R.',
                'Dear Prudence',
                'Glass Onion',
                'Ob-La-Di, Ob-La-Da',
                'Wild Honey Pie',
                'The Continuing Story of Bungalow Bill',
                'While My Guitar Gently Weeps',
                'Happiness Is a Warm Gun',
                'Martha My Dear',
                'I\'m So Tired',
                'Blackbird',
                'Piggies',
                'Rocky Raccoon',
                'Don\'t Pass Me By',
                'Why Don\'t We Do It in the Road?',
                'I Will',
                'Julia',
                'Birthday',
                'Yer Blues',
                'Mother Nature\'s Son',
                'Everybody\'s Got Something to Hide Except Me and My Monkey',
                'Sexy Sadie',
                'Helter Skelter',
                'Long, Long, Long',
                'Revolution 1',
                'Honey Pie',
                'Savoy Truffle',
                'Cry Baby Cry',
                'Revolution 9',
                'Good Night'
            ] 
        },
        { 
            name: 'Yellow Submarine', 
            image: 'yellowsubmarine.png', 
            songs: [
                'Yellow Submarine',
                'Only a Northern Song',
                'All Together Now',
                'Hey Bulldog',
                'It\'s All Too Much',
                'Pepperland',
                'Sea of Time',
                'Sea of Holes',
                'Sea of Monsters',
                'March of the Meanies',
                'Pepperland Laid Waste',
                'Yellow Submarine in Pepperland'
            ] 
        },
        { 
            name: 'Abbey Road', 
            image: 'abbeyroad.png', 
            songs: [
                'Come Together',
                'Something',
                'Maxwell\'s Silver Hammer',
                'Oh! Darling',
                'Octopus\'s Garden',
                'I Want You (She\'s So Heavy)',
                'Here Comes The Sun',
                'Because',
                'You Never Give Me Your Money',
                'Sun King',
                'Mean Mr. Mustard',
                'Polythene Pam',
                'She Came In Through The Bathroom Window',
                'Golden Slumbers',
                'Carry That Weight',
                'The End',
                'Her Majesty'
            ] 
        },
        { 
            name: 'Let It Be', 
            image: 'letitbe.png', 
            songs: [
                'Two Of Us',
                'Dig A Pony',
                'Across The Universe',
                'I Me Mine',
                'Dig It',
                'Let It Be',
                'Maggie Mae',
                'I\'ve Got A Feeling',
                'One After 909',
                'The Long And Winding Road',
                'For You Blue',
                'Get Back'
            ] 
        }
    ];

const selectedAlbums = new Set();
    let clipLength = 5;
    let streak = 0;
    let currentSong = '';
    let currentSongDuration = 0;
    let clipStartTime = 0;
    let playedSongs = [];
    let clipTimeout;

    const mainScreen = document.querySelector('.main-screen');
    const gameScreen = document.querySelector('.game-screen');
    const endScreen = document.querySelector('.end-screen');
    const playButton = document.getElementById('play-button');
    const timeSlider = document.getElementById('time-slider');
    const clipLengthDisplay = document.getElementById('clip-length');
    const albumsContainer = document.querySelector('.albums');
    const audio = document.getElementById('audio');
    const replayButton = document.getElementById('replay-button');
    const guessInput = document.getElementById('guess-input');
    const suggestionsContainer = document.getElementById('suggestions');
    const streakDisplay = document.getElementById('streak');
    const restartButton = document.getElementById('restart-button');
    const resultsContainer = document.getElementById('results');

    timeSlider.addEventListener('input', function() {
        clipLength = parseFloat(timeSlider.value);
        clipLengthDisplay.textContent = clipLength;
    });

    albums.forEach(album => {
        const img = document.createElement('img');
        img.src = album.image;
        img.alt = album.name;
        img.addEventListener('click', function() {
            if (selectedAlbums.has(album)) {
                selectedAlbums.delete(album);
                img.classList.remove('selected');
            } else {
                selectedAlbums.add(album);
                img.classList.add('selected');
            }
        });
        albumsContainer.appendChild(img);
    });

    playButton.addEventListener('click', function() {
        if (selectedAlbums.size > 0) {
            mainScreen.classList.add('hidden');
            gameScreen.classList.remove('hidden');
            startGame();
        } else {
            alert('Please select at least one album.');
        }
    });

    replayButton.addEventListener('click', function() {
        playClip();
    });

    guessInput.addEventListener('input', function() {
        const query = guessInput.value.toLowerCase();
        const suggestions = [];
        selectedAlbums.forEach(album => {
            album.songs.forEach(song => {
                if (song.toLowerCase().includes(query)) {
                    suggestions.push(song);
                }
            });
        });
        displaySuggestions(suggestions);
    });

    function displaySuggestions(suggestions) {
        suggestionsContainer.innerHTML = '';
        suggestions.forEach(suggestion => {
            const div = document.createElement('div');
            div.textContent = suggestion;
            div.addEventListener('click', function() {
                if (suggestion === currentSong) {
                    streak++;
                    streakDisplay.textContent = 'Streak: ' + streak;
                    nextSong();
                } else {
                    endGame();
                }
            });
            suggestionsContainer.appendChild(div);
        });
    }

    function startGame() {
        streak = 0;
        streakDisplay.textContent = 'Streak: ' + streak;
        playedSongs = [];
        nextSong();
    }

    function nextSong() {
        const albumArray = Array.from(selectedAlbums);
        const randomAlbum = albumArray[Math.floor(Math.random() * albumArray.length)];
        const randomSong = randomAlbum.songs[Math.floor(Math.random() * randomAlbum.songs.length)];
        currentSong = randomSong;

        audio.src = `${currentSong}.mp3`; // Append .mp3 here
        audio.addEventListener('loadedmetadata', function() {
            currentSongDuration = audio.duration;
            clipStartTime = Math.random() * (currentSongDuration - clipLength);
            playClip();
        }, { once: true });

        playedSongs.push(currentSong);
    }

    function playClip() {
        clearTimeout(clipTimeout);
        replayButton.disabled = true;
        audio.currentTime = clipStartTime;
        audio.play();
        clipTimeout = setTimeout(() => {
            audio.pause();
            replayButton.disabled = false;
        }, clipLength * 1000);
    }

    function endGame() {
        gameScreen.classList.add('hidden');
        endScreen.classList.remove('hidden');
        resultsContainer.innerHTML = 'Game Over! Your streak was ' + streak + '<br>';
        playedSongs.forEach(song => {
            resultsContainer.innerHTML += '<li>' + song + '</li>';
        });
    }

    restartButton.addEventListener('click', function() {
        endScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        playedSongs = [];
        selectedAlbums.clear();
        albumsContainer.querySelectorAll('img').forEach(img => img.classList.remove('selected'));
        suggestionsContainer.innerHTML = '';
    });
});