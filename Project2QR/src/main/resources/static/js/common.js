// Search functionality
        document.querySelector('.search-btn').addEventListener('click', function() {
            const searchValue = document.querySelector('.search-box').value;
            if (searchValue.trim()) {
                alert(`"${searchValue}" 검색 결과를 찾고 있습니다...`);
            }
        });

        document.querySelector('.search-box').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.querySelector('.search-btn').click();
            }
        });

        // Auth button functionality
        document.querySelectorAll('.auth-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const action = this.textContent;
                alert(`${action} 페이지로 이동합니다.`);
            });
        });

        // Logo click functionality
        document.querySelector('.logo').addEventListener('click', function() {
            alert('홈페이지로 이동합니다.');
        });

        // Footer link functionality
        document.querySelectorAll('.footer-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const linkText = this.textContent;
                alert(`${linkText} 페이지로 이동합니다.`);
            });
        });


//side-menu
        const floatingBtn = document.getElementById('floatingBtn');
            const menuPopup = document.getElementById('menuPopup');
            const menuOverlay = document.getElementById('menuOverlay');
            const closeBtn = document.getElementById('closeBtn');

            // 플로팅 버튼 클릭으로 메뉴 팝업 열기
            floatingBtn.addEventListener('click', function() {
                menuPopup.classList.add('active');
                menuOverlay.classList.add('active');
                floatingBtn.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            // 메뉴 팝업 닫기 함수
            function closeMenu() {
                menuPopup.classList.remove('active');
                menuOverlay.classList.remove('active');
                floatingBtn.classList.remove('active');
                document.body.style.overflow = 'auto';
            }

            // 닫기 버튼 클릭
            closeBtn.addEventListener('click', closeMenu);

            // 오버레이 클릭으로 메뉴 팝업 닫기
            menuOverlay.addEventListener('click', closeMenu);

            // ESC 키로 메뉴 팝업 닫기
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && menuPopup.classList.contains('active')) {
                    closeMenu();
                }
            });

            // 메뉴 클릭 핸들러
            function handleMenuClick(menuName) {
                alert(`${menuName} 메뉴를 선택하셨습니다!`);
                // 실제로는 여기서 페이지 이동
                // window.location.href = `/menu/${menuName}`;
            }

            // 메뉴 아이템 애니메이션
            document.querySelectorAll('.menu-item').forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px) scale(1.02)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
