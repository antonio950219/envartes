<script lang="ts">
import { saveAs } from "file-saver";
import imgDownload from "~/assets/images/download.svg"

export default defineComponent({
    name: "Attachment",
    props: [],
    components: {
    },
    data () {
        return ({
            imgDownload
        })
    },
    methods: {
        createTextFile() {
            const text = 'Hello';
            const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
            saveAs(blob, 'notepad.txt');
        },
        createExcelFile() {
            const text = 'Hello';
            const blob = new Blob([text], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
            saveAs(blob, 'excel.xlsx');
        },
        createPdfFile() {
            const text = new Uint8Array([])
            const blob = new Blob([text], { type: 'application/pdf'});
            saveAs(blob, 'pdf.pdf');
        },
        createWordFile() {
            const text = 'Hello';
            const blob = new Blob([text], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
            saveAs(blob, 'word.docx');
        },
        createJpgFile() {
            const blob = new Blob([], { type: 'image/jpeg'});
            saveAs(blob, 'image_placeholder.jpg');
        },
        createPngFile() {
            const blob = new Blob([], { type: 'image/png'});
            saveAs(blob, 'Asset 3_3x.png');

        }
    }
});
</script>

<template>
    <div class="attachment mx-auto">
        <div class="attachment-title mb-5">Attachments</div>
        <div class="attachment-items flex flex-wrap lg:flex-no-wrap justify-center">
            <div @click="createTextFile" class="w-full lg:w-1/2 attachment-item flex my-2">
                <img :src=imgDownload />
                <div class="item-filename ml-3">notepad.txt</div>
            </div>
            <div @click="createExcelFile" class="w-full lg:w-1/2 attachment-item flex my-2">
                <img :src=imgDownload />
                <div class="item-filename ml-3">excel.xlsx</div>
            </div>
            <div @click="createPdfFile" class="w-full lg:w-1/2 attachment-item flex my-2">
                <img :src=imgDownload />
                <div class="item-filename ml-3">pdf.pdf</div>
            </div>
            <div @click="createWordFile" class="w-full lg:w-1/2 attachment-item flex my-2">
                <img :src=imgDownload />
                <div class="item-filename ml-3">word.docx</div>
            </div>
            <div @click="createJpgFile" class="w-full lg:w-1/2 attachment-item flex my-2">
                <img :src=imgDownload />
                <div class="item-filename ml-3">image_placeholder.jpg</div>
            </div>
            <div @click="createPngFile" class="w-full lg:w-1/2 attachment-item flex my-2">
                <img :src=imgDownload />
                <div class="item-filename ml-3">Asset 3_3x.png</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.attachment {
    width: 90%;
    padding: 30px;
    & .attachment-title {
        font-size: 18px;
        color: #030037;
        font-weight: bold;
    }

    & .attachment-item {
        background-color: rgba(12, 28, 71, 0.02);
        border-radius: 20px;
        padding: 10px;

        & .item-filename {
            font-size: 15px;
            color: #0895F1;
            font-weight: bold;
        }
    }
}
</style>