import React, { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/react';

const MusicButton: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <button onClick={togglePlayPause} style={{
                border: useColorModeValue('2px solid #fff', '2px solid #333'),
                background: useColorModeValue('rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.2)'),
                cursor: 'pointer',
                borderRadius: '50%',
                padding: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'background 0.3s ease',
                width: '60px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <i className={isPlaying ? 'fas fa-pause-circle' : 'fas fa-play-circle'} style={{ fontSize: '24px', color: useColorModeValue('#000', '#fff') }}></i>
            </button>
            <audio ref={audioRef} src="../../../../music.mp3" />
        </div>
    );
};

export default MusicButton;
