<script lang="ts">
import { saveAs } from "file-saver";
import imgDownload from "~/assets/images/download.svg"
import Attachment from "@/components/Attachment.vue";


export default defineComponent({
    name: "Summary",
    components: {
        Attachment
    },
    data () {
        return ({
            imgDownload
        })
    },
    props: [],
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
    <div class="summary-table mb-10">
        <div class="show-mobile-layout">
            <div class="summary-title">
                <div class="flex justify-between">
                    <div>Order Number</div>
                    <div>0</div>
                </div>
                <div class="summary-spacer my-5"></div>

                <div class="flex justify-between">
                    <div>Date</div>
                    <div>11/28/2022</div>
                </div>
                <div class="summary-spacer my-5"></div>

                <div class="flex justify-between">
                    <div>Number of Items</div>
                    <div>3</div>
                </div>
                <div class="summary-spacer my-5"></div>

                <div class="flex justify-between">
                    <div>Total</div>
                    <div>$70.00</div>
                </div>
                <div class="summary-spacer my-5"></div>
            </div>

            <Attachment />
            
        </div>

        <div class="hidden-mobile-layout">
            <div class="grid grid-cols-6 items-center summary-title">
                <div class="col-span-1">Order Number</div>
                <div class="col-span-1">Date</div>
                <div class="col-span-1">Number of Items</div>
                <div class="col-span-1">Total</div>
                <div class="col-span-2 text-left">Attachments</div>
            </div>
            <div class="grid grid-cols-6 summary-body">
                <div class="col-span-1">SO-0006</div>
                <div class="col-span-1">11/28/2022</div>
                <div class="col-span-1">3</div>
                <div class="col-span-1">$70.00</div>
                <div class="col-span-2">
                    <div class="grid grid-cols-1 2xl:grid-cols-2 items-center">
                        <div @click="createTextFile" class="flex attachment-item items-center my-2">
                            <img :src=imgDownload />
                            <div class="item-filename ml-3">notepad.txt</div>
                        </div>
                        <div @click="createExcelFile" class="flex attachment-item items-center my-2">
                            <img :src=imgDownload />
                            <div class="item-filename ml-3">excel.xlsx</div>
                        </div>
                        <div @click="createPdfFile" class="flex attachment-item items-center my-2">
                            <img :src=imgDownload />
                            <div class="item-filename ml-3">pdf.pdf</div>
                        </div>
                        <div @click="createWordFile" class="flex attachment-item items-center my-2">
                            <img :src=imgDownload />
                            <div class="item-filename ml-3">word.docx</div>
                        </div>
                        <div @click="createJpgFile" class="flex attachment-item items-center my-2">
                            <img :src=imgDownload />
                            <div class="item-filename ml-3">image_placeholder.jpg</div>
                        </div>
                        <div @click="createPngFile" class="flex attachment-item items-center my-2">
                            <img :src=imgDownload />
                            <div class="item-filename ml-3">Asset 3_3x.png</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.summary-table {
    width: 100%;
    & .summary-title {
        font-size: 18px;
        color: #030037;
        font-weight: bold;

        & .summary-spacer {
            width: 100%;
            height: 1px;
            background-color: rgba(12, 28, 71, 0.1);
        }
    }
    & .summary-body {
        font-size: 18px;
        color: rgba(12, 28, 71, 0.75);
        & .attachment-item {
            background-color: rgba(12, 28, 71, 0.02);
            border-radius: 20px;
            & .item-filename {
                color: #0895F1;
            }
        }
    }
    & .show-mobile-layout {
        display: none;
    }
    & .hidden-mobile-layout {
        display: block;
    }

    @media (max-width: 1024px) {        
        & .show-mobile-layout {
            display: block;
        }
        & .hidden-mobile-layout {
            display: none;
        }
    }
}
</style>