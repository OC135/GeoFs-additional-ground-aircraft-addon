(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.42152533383808;
            const lat = 36.18311605279481;
            const alt = 32.308521902395505;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/f2a1.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 198; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.42133042118286;
            const lat = 36.18317093979095;
            const alt = 32.27474205461491;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/f2a1.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 198; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.4211453982989;
            const lat = 36.183224335956346;
            const alt = 32.27433860574745;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/f2a1.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 199; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.42095662286295;
            const lat = 36.183279075771324;
            const alt = 32.2716763989122;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/f2a1.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 199; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.40839298446878;
            const lat = 36.177394722790524;
            const alt = 34.17573982993775;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/SKY7381.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 333; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.42082477947557;
            const lat = 36.1820094491181;
            const alt = 32.1680904405605;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/t4a1.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 20; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.42129596492134;
            const lat = 36.18258862577359;
            const alt = 32.142208019851104;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/t4a1.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 20; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.42260806009546;
            const lat = 36.18558275289931;
            const alt = 32.2452832065789;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/u1251.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 20; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.4223350432202;
            const lat = 36.1856661200927;
            const alt = 32.241339162214345;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/u1251.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 20; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.4223274419657;
            const lat = 36.18518117826357;
            const alt = 31.994604647186762;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/uh60j2.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 20; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();

(function() {
    const wait = setInterval(() => {
        if (window.geofs?.api?.viewer && window.Cesium) {
            clearInterval(wait);

            const viewer = geofs.api.viewer;
            const Cesium = window.Cesium;

            // ★ 座標
            const lon = 140.42201336207384;
            const lat = 36.1852650697459;
            const alt = 31.968296533213138;

            // ★ モデルURL
            const modelUrl = "https://OC135.github.io/test6/uh60j2.glb";

            // ★ 方角（heading）を指定（度数法）
            const headingDeg = 20; // ← ここを好きな角度に変える

            // ★ heading をラジアンに変換
            const heading = Cesium.Math.toRadians(headingDeg);

            // ★ orientation（向き）を設定
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                new Cesium.HeadingPitchRoll(heading, 0, 0)
            );

            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
                orientation: orientation,
                model: {
                    uri: modelUrl,
                    scale: 1.0,
                    minimumPixelSize: 32
                }
            });

            console.log("モデルを配置しました:", lat, lon, alt, "heading:", headingDeg);
        }
    }, 300);
})();
